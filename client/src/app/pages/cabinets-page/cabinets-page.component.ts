import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { CabinetNormalComponent } from '../../shared/cabinet-normal/cabinet-normal.component';
import { AddCabinetButtonComponent } from '../../shared/add-cabinet-button/add-cabinet-button.component';
import { FridgeComponent } from '../../shared/fridge/fridge.component';
import { FreezerComponent } from '../../shared/freezer/freezer.component';
import { AddCabinetPopupComponent } from './add-cabinet-popup/add-cabinet-popup.component';
import { CommonModule } from '@angular/common';
import { CabinetService } from '../../services/cabinet.service';

@Component({
  selector: 'app-cabinets-page',
  standalone: true,
  imports: [PageTitleComponent, AddButtonComponent, CabinetNormalComponent, AddCabinetButtonComponent, FridgeComponent, FreezerComponent, CommonModule, AddCabinetPopupComponent],
  templateUrl: './cabinets-page.component.html',
  styleUrl: './cabinets-page.component.css'
})
export class CabinetsPageComponent implements OnInit {
  showAddCabinetPopup = false;
  userCabinets: any[] = [];
  isLoading = true;

  constructor(private router: Router, private cabinetService: CabinetService) {}

  ngOnInit() {
    // Subscribe to cabinet changes for real-time updates
    this.cabinetService.getCabinets$().subscribe(cabinets => {
      this.userCabinets = cabinets;
      this.isLoading = false;
      console.log('🗄️ Cabinets updated:', cabinets);
    });
    
    // Trigger initial load
    this.cabinetService.refreshCabinets();
  }

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onCabinetClick(cabinetIndex: number) {
    // Use the database ID instead of array index
    const cabinet = this.userCabinets[cabinetIndex];
    if (cabinet && cabinet.id) {
      this.router.navigate(['/cabinet', cabinet.id]);
    } else {
      // Fallback to index if no ID (shouldn't happen with database)
      this.router.navigate(['/cabinet', cabinetIndex]);
    }
  }

  onAddCabinetClick() {
    this.showAddCabinetPopup = true;
  }

  onPopupClosed() {
    this.showAddCabinetPopup = false;
  }

  onFridgeClick() {
    console.log('Fridge button clicked!');
  }

  onFreezerClick() {
    console.log('Freezer button clicked!');
  }

  /**
   * Handle new cabinet creation - saves to database
   * @param index - Cabinet type (0=fridge, 1=freezer, 2=cabinet)
   * @param name - Cabinet display name
   */
  onCabinetAdded(index: number, name: string) {
    this.isLoading = true;
    
    this.cabinetService.addCabinet({ name: name, type: index }).subscribe({
      next: (response) => {
        console.log('✅ Cabinet created successfully:', response);
        this.showAddCabinetPopup = false;
        // The subscription will automatically update the cabinet list
      },
      error: (err) => {
        console.error('❌ Error creating cabinet:', err);
        alert('Failed to create cabinet. Please check the console for details.');
        this.isLoading = false;
      }
    });
  }
}
