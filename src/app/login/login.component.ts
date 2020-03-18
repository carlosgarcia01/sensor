import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isLoggingIn = true;
  user: User;
  processing = false;

  constructor() {
      this.user = new User();
      this.user.email = "user@nativescript.org";
      this.user.password = "password";
  }

  toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
      if (!this.user.email || !this.user.password) {
          this.alert("Please provide both an email address and password.");
          return;
      }

      this.processing = true;
      if (this.isLoggingIn) {
         
      } else {
         
      }
  }

  alert(message: string) {
      return alert({
          title: "APP NAME",
          okButtonText: "OK",
          message: message
      });
  }

}
