import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatabaseHandlerService } from '../../database-handler.service';
import { resolve } from 'path';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  UserKnown: boolean = false;
  isLogin: boolean = true;
  introFrame: number = 0;
  tempUserID: number = 0;
  tempAccessCode: string = "";
  UserInSystem: boolean = false;
  HouseholdSelector: boolean = false;
  HouseholdPage: number = 0;
  HouseholdInviteCode: number = 0;
  inviteCodeIsSystem: boolean = false;
  inviteCodesInSystem: any[] = [];
  tempInviteCode: string = "";
  inviteCodeFound: boolean = false;
  spotOpen: boolean = false;

  household:{
    displayName: string;
    invideCode: number;
    HouseHoldMember1: number;
  }={
    displayName: "",
    invideCode: 0,
    HouseHoldMember1: 0,
  }

  user:{
    FirstName: string;
    LastName: string;
    UserName: string;
    AccessCode: string;
    AccessCode2: string;
    UserEmail: string;
    UserEmail2: string;
  } = {
    FirstName: "",
    LastName: "",
    UserName: "",
    AccessCode: "",
    AccessCode2: "",
    UserEmail: "",
    UserEmail2: ""
  }

  query:{
    AccessCode: string;
    FirstName: string;
    LastName: string;
    UserEmail: string;
    Username: string;
    UUID: number;
    displayName: string;
    inviteCode: number;
    HouseHoldMember1: number;
    HouseHoldMember2: number | null;
    HouseHoldMember3: number | null;
    HouseHoldMember4: number | null;
    HouseHoldMember5: number | null;
    HouseHoldMember6: number | null;
    UHID: number;
  } = {
    AccessCode: "",
    FirstName: "",
    LastName: "",
    UserEmail: "",
    Username: "",
    UUID: 0,
    displayName: "",
    inviteCode: 0,
    HouseHoldMember1: 0,
    HouseHoldMember2: null,
    HouseHoldMember3: null,
    HouseHoldMember4: null,
    HouseHoldMember5: null,
    HouseHoldMember6: null,
    UHID: 0,
  }

  constructor(private router: Router, public databaseHandler: DatabaseHandlerService){}

  ngOnInit(): void {
    this.checkUser();
    if (this.UserKnown){
      this.router.navigate(['/home']);
    }
  }

  login(){
    this.isLogin = true;
  }
  checkUser(){
    let User = localStorage.getItem("UUID");
    console.log(User);
    if (User){
      this.UserKnown = true;
    }
    else {
      this.UserKnown = false;
    }
  }
  newUser(){
    console.log("signup clicked");
    this.isLogin = false;
  }

  async submitFormLogin(){
    this.query.Username = this.user.UserName;
    this.query.AccessCode = this.user.AccessCode;
    await this.grabID();
    this.query.UUID = this.tempUserID;
    await this.grabPWD();

    if(this.user.AccessCode == this.tempAccessCode){
      localStorage.setItem("UUID",(this.query.UUID).toString());
      this.router.navigate(['/home']);
    }
    else{
      alert("Bruger ikke fundet i systemet. prøve igen.");
    }
  }

  async submitFormNewUser(){
    if (this.user.UserEmail !== this.user.UserEmail2){
      alert("Email passer ikke");
      return
    }
    if (this.user.AccessCode !== this.user.AccessCode2){
      alert("Adgangskode passer ikke");
      return
    }
    this.query.Username = this.user.UserName;
    await this.grabID();
    if (this.UserInSystem){
      alert("dette brugernavn er allerede taget, vælg et nyt et");
      return
    }
    this.query.FirstName = this.user.FirstName;
    this.query.LastName = this.user.LastName;
    this.query.UserEmail = this.user.UserEmail;
    this.query.AccessCode = this.user.AccessCode;
    console.log("New User created with the following:",this.user,"with query:",this.query);
    await this.createUser();
    this.query.HouseHoldMember1 = this.query.UUID;
    this.HouseholdSelector = true;
  }

  grabID(): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.getEntryDatabase("ID","UserName",this.query).subscribe(UUID =>{
        if (UUID && UUID.length > 0){
          this.tempUserID = UUID[0].UUID;
          this.UserInSystem = true;
        } else{
          this.UserInSystem = false;
        }
        resolve();
      })
    })
  }
  grabPWD(): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.getEntryDatabase("User","AccessCode",this.query).subscribe(AccessCode =>{
        if (AccessCode){
          this.tempAccessCode = AccessCode[0].AccessCode;
        }
        resolve();
      })
    })
  }

  createUser(): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.insertIntoDatabase("User",this.query).subscribe(User=>{
        if(User){
          console.log("Created New User:",User);
        }
        resolve();
      })
    })
  }

  async joinHouseHold(){
    await this.grabID();
    this.query.UUID = this.tempUserID;
    let i = 2;
    let maxQuery = 6
    while(i < maxQuery){
      await this.checkHouseHoldStatus(i);
      if (this.spotOpen){
        await this.addUserToHouseHold(i);
        break;
      }
      i++
    }
    if (i >= 7){
      alert("Husstand er fuld");
    }
    else {
      localStorage.setItem("UUID",(this.query.UUID).toString())
      this.router.navigate(['/home']);
    }
  }

  async createNewHousehold() {
    console.log("creating new household");
    this.HouseholdPage = 1;
    let i = 0;
    let maxQuery = 50; // Set limit for queries
    this.inviteCodeIsSystem = true; // Assume the code is valid initially
    this.household.invideCode = this.generateInviteCode();
    while (i <= maxQuery) {
      await this.checkforCode();
      // Check if the invite code is in the system
      this.inviteCodeIsSystem = this.inviteCodesInSystem.every(
        (code) => code !== this.household.invideCode
      );

      if (!this.inviteCodeIsSystem) {
        console.log("Invite code already exists in the system.");
        break;
      }

      i++;
    }
    if (this.inviteCodeIsSystem) {
      console.log("Invite code is unique.");
      this.query.inviteCode = this.household.invideCode;
    }
  }

  joinHousehold(){
    console.log("joining Household");
    this.HouseholdPage = 2;
  }
  goBack(index: number){
    this.inviteCodeFound = false;
    this.HouseholdPage = index;
  }


  async submitJoinRequest() {
    let i = 0;
    const maxQueries = 50;
    this.inviteCodeFound = false; // Flag to track if the code matches
    console.log("user entered code:", this.tempInviteCode);
    while (i < maxQueries) {
      console.log("running invitecodeCheck on index:",i);
      this.query.UHID = i;
      await this.InviteCodeCheck(); // Fetch invite codes one by one

      // Check if the user's tempInviteCode matches any invite code in the system
      console.log("Invitecode in system",this.inviteCodesInSystem[i]);
      if (this.inviteCodesInSystem.includes(this.tempInviteCode)) {
        this.inviteCodeFound = true; // Set the flag to true if a match is found
        break; // Exit the loop early if the code is valid
      } else{
        i++;
      }
    }

    if (this.inviteCodeFound) {
      console.log("Invite code is valid. Proceeding...");
      await this.grabHouseDisplayName();
      console.log("updated displayname:",this.query.displayName);
      this.HouseholdPage = 22;
    } else {
      console.error("Invite code is not valid. Please try again.");
      alert("Koden de har skrevet er ikke i systemet, prøv igen");
    }
  }

  checkHouseHoldStatus(index:number): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.getEntryDatabase("HouseHold",`HouseHoldMember${index}`,this.query).subscribe(Member=>{
        if (Member && Member.length > 0){
          console.log("Membership spot on index ",index," has the following data:",Member[0])
          switch (index) {
            case 2:
              if (Member[0].HouseHoldMember2 === null){ this.spotOpen = true };
              console.log("is spot 2 open? ",this.spotOpen);
              this.query.HouseHoldMember2 = this.query.UUID;
              break;
            case 3:
              if (Member[0].HouseHoldMember3 === null){ this.spotOpen = true };
              console.log("is spot 3 open? ",this.spotOpen);
              this.query.HouseHoldMember3 = this.query.UUID;
              break;
            case 4:
              if (Member[0].HouseHoldMember4 === null){ this.spotOpen = true };
              console.log("is spot 4 open? ",this.spotOpen);
              this.query.HouseHoldMember4 = this.query.UUID;
              break;
            case 5:
              if (Member[0].HouseHoldMember5 === null){ this.spotOpen = true };
              console.log("is spot 5 open? ",this.spotOpen);
              this.query.HouseHoldMember5 = this.query.UUID;
              break;
            case 6:
              if (Member[0].HouseHoldMember6 === null){ this.spotOpen = true };
              console.log("is spot 6 open? ",this.spotOpen);
              this.query.HouseHoldMember6 = this.query.UUID;
              break;
            default:
              break;
          }
        }
        resolve();
      })
    })
  }

  addUserToHouseHold(index:number): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.updateEntryDatabase("HouseHold",`HouseHoldMember${index}`,this.query).subscribe(HouseHold=>{
        if (HouseHold){
          console.log("User added",HouseHold);
        }
        resolve();
      })
    })
  }

  async reDirect(){
    await this.grabUHID();

    localStorage.setItem("UUID",(this.query.UUID).toString());

    this.router.navigate(['/home']);
  }

  async newhouseholdSubmit(){
    this.query.displayName = this.household.displayName;
    await this.grabID();
    this.query.UUID = this.tempUserID;
    this.query.HouseHoldMember1 = this.query.UUID;
    this.household.HouseHoldMember1 = this.query.HouseHoldMember1;
    console.log("creating new household with the following data:",this.household,"via:",this.query);
    await this.createHouseHold();
    await this.grabUHID();
    await this.createIndex();

    this.HouseholdPage = 11;
  }

  checkforCode(): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.getEntryDatabase("Household","InviteCode",this.query).subscribe(inviteCode =>{
        if (inviteCode && inviteCode.length > 0){
           this.inviteCodesInSystem.push( inviteCode[0].inviteCode );
        }
        resolve();
      })
    })
  }
  generateInviteCode(){
    let i = 0;
    let outputCode = "";

    while(i < 8){
      const generatednumber = (Math.floor(Math.random()*10)).toString();
      outputCode += generatednumber;
      i++;
    }

    console.log("genrated code:",outputCode);
    return parseInt(outputCode, 10);
  }

  createHouseHold(): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.insertIntoDatabase("Household",this.query).subscribe(household=>{
        if (household){
          console.log("household Created");
        }
        resolve();
      })
    })
  }


grabUHID(): Promise<void>{
  return new Promise((resolve)=>{
    this.databaseHandler.getEntryDatabase("ID","Household1",this.query).subscribe(ID=>{
      if(ID){
        this.query.UHID = ID[0].UHID;
        console.log("UHID:",ID);
      }
      resolve();
    });
  })
}

grabHouseDisplayName(): Promise<void>{
  return new Promise((resolve)=>{
    this.databaseHandler.getEntryDatabase("HouseHold","DisplayName",this.query).subscribe(DisplayName=>{
      if(DisplayName){
        this.query.displayName = DisplayName[0].displayName;
        console.log("DisplayName:",DisplayName);
      }
      resolve();
    })
  })
}


  createIndex(): Promise<void>{
    return new Promise((resolve)=>{
      this.databaseHandler.createTableDatabase("HouseHoldIndex",this.query).subscribe(Index=>{
        if(Index){
          console.log("Index created:",Index);
        }
        resolve();
      })
    })
  }

  InviteCodeCheck(): Promise<void> {
    return new Promise((resolve) => {
      this.databaseHandler.getEntryDatabase("HouseHold", "InviteCode", this.query).subscribe((Code) => {
        if (Code && Code.length > 0) {
          console.log("Code received:", Code[0].inviteCode, "for query:", this.query);
          this.inviteCodesInSystem.push(Code[0].inviteCode.toString()); // Store as string
        } else {
          console.log("No code received for query:", this.query);
        }
        resolve();
      });
    });
  }

}
