import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



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


  constructor(private router: Router){}

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

  submitFormLogin(){}

  submitFormNewUser(){}

}
