import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isLoggingIn = true;
  user: User;


  constructor(private router:RouterExtensions) {
      this.user = new User();
  }



  toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {

     if (!this.user.email || !this.user.password) {
          this.alert("Please provide both an email address and password.");
          return;
      } else
        this.router.navigate(['/home',{clearHistory:true}]);
  }

  alert(message: string) {
      return alert({
          title: "APP NAME",
          okButtonText: "OK",
          message: message
      });
  }

}
