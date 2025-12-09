import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { CabinetNormalComponent } from '../../shared/cabinet-normal/cabinet-normal.component';
import { ListComponent } from '../../shared/list/list.component';
import { RecipeBoxComponent } from '../../shared/recipe-box/recipe-box.component';
import { DatabaseHandlerService } from '../../database-handler.service';
import { CabinetItemComponent } from '../../shared/cabinet-item/cabinet-item.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  imports: [PageTitleComponent, AddButtonComponent, CabinetNormalComponent, ListComponent, RecipeBoxComponent, CommonModule, CabinetItemComponent,HttpClientModule],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  dataLoaded: boolean = false;
  expiringItems: any[] = [];
  expiringItemsSorted: any[] = [];
  expiringitemsLimited: any[] = [];
  cabinetCodes: any[] = [];
  HouseholdID: any;
  query: {
    UUID: number;
    UHID: number;
    UFID: number;
    HCIID: number;
    cabinetCode: number;
  }={
    UUID:0,
    UHID:0,
    UFID:0,
    HCIID:0,
    cabinetCode:0,
  };
  displayNameMap: Map<any, any> = new Map();

  constructor(private router: Router, private databasehandler: DatabaseHandlerService) {}

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onCabinetClick() {
    console.log('Cabinet button clicked!');
    this.router.navigate(['/cabinets'])
  }

  onListClick() {
    console.log('List button clicked!');
    this.router.navigate(['/grocery-list'])
  }

  onRecipeClick() {
    console.log('Recipe box clicked!');
    this.router.navigate(['/recipe'])
  }



  ngOnInit(): void {
    this.dataLoaded = false;
    this.expirationList();
    console.log('Load Completed')

  }

  async expirationList() {
    this.query.UUID = 1; // Temporary solution, missing login and caching system.
    let i = 1;
    // Find household ID
    while (i < 7) {
      const householdID = await this.getHouseholdID(i);
      if (householdID) {
        this.HouseholdID = householdID;
        break; // Stop the loop once the correct householdID is found
      }
      i++;
    }

    if (!this.HouseholdID) {
      console.error("HouseHoldID not found");
      return;
    }

    console.log('householdID:',this.HouseholdID.UHID);

    this.query.UHID = this.HouseholdID.UHID;

    // Fetch cabinet codes with a maximum limit to prevent infinite loops
    let j = 1;
    const maxCabinets = 25; // Set a reasonable limit
    while (j <= maxCabinets) {
      console.log("running cabinetCode fetch, index:", j);
      const cabinetCode = await this.getCabinetCode(j);
      if (!cabinetCode[0]) {
        break; // Stop if no more cabinet codes are found
      }

      this.cabinetCodes.push(cabinetCode[0]);
      j++;
    }

    // Process each cabinet code
    for (const cabinetCode of this.cabinetCodes) {
      console.log("running: fetching data");
      console.log("cabient codes:",this.cabinetCodes);


      const cabinetData = await this.getCabinetData(cabinetCode);
      if (cabinetData) {
        this.processCabinetData(cabinetData, this.expiringitemsLimited);
      }
    }

    // Sort items by expiration date
    this.expiringItemsSorted = this.expiringitemsLimited.sort((a, b) => {
      const dateA = new Date(a.itemExpirationDate);
      const dateB = new Date(b.itemExpirationDate);
      return dateA.getTime() - dateB.getTime();
    });

    console.log("Sorted Cabinet Items:");
    console.log(this.expiringItemsSorted);

    let listIndex = 0;

    for (const item of this.expiringItemsSorted) {
      await this.fetchDisplayName(item,listIndex);
      listIndex++;
    }
    this.dataLoaded = true;
  }

  processCabinetData(data: any, list: any[]){
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate()+7);

    const itemDate = new Date(data.itemExpirationDate);

    if (itemDate > futureDate){
      console.log("got enough time");
    }
    else {
      list.push(data);
    }
  }
 fetchDisplayName(item: any, index: number): Promise<void> {
  return new Promise((resolve) => {
    console.log("items:",item);
    this.query.UFID = item[index].itemID;
    console.log("UFID:",this.query.UFID);
    this.databasehandler.getEntryDatabase("Food", "DisplayName", this.query).subscribe(displayName => {
      if (displayName) {
        this.displayNameMap.set(item.itemID, displayName);
      }
      resolve(); // Resolve the Promise after the operation is complete
    });
  });
}

getHouseholdID(index: number): Promise<any> {
  console.log(`Query for getHouseholdID on index: ${index}:`, this.query);
  return new Promise((resolve) => {
    this.databasehandler.getEntryDatabase("ID", `Household${index}`, this.query).subscribe(
      householdID => {
        console.log('output:',householdID);
        if (Array.isArray(householdID)) {
          resolve(householdID[0]); // Resolve with the first item in the array
        } else {
          resolve(householdID); // Resolve with the value directly if it's not an array
        }
      },
      error => {
        console.error('Error fetching HouseholdID:', error);
        resolve(null); // Resolve with null in case of an error
      }
    );
  });
}

getCabinetCode(index: number): Promise<any> {
  return new Promise((resolve) => {
    this.query.HCIID = index;
    console.log('Query for getCabinetCode:',this.query);
    this.databasehandler.getEntryDatabase("HouseHoldCabinetIndex", "CabinetCode", this.query).subscribe(cabinetCode => {
      resolve(cabinetCode); // Resolve the Promise with the result
    });
  });
}

getCabinetData(cabinetCode: any): Promise<any> {
  return new Promise((resolve) => {
    this.query.cabinetCode = cabinetCode.cabinetCode;
    console.log("Code for cabinet:", this.query.cabinetCode);
    this.databasehandler.getEntryDatabase("Cabinet", "Everything", this.query).subscribe(cabinetData => {
      resolve(cabinetData); // Resolve the Promise with the result
    });
  });
}



}
