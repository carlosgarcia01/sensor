import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {RouterExtensions} from 'nativescript-angular/router';
import {LoginService} from "../shared/login.service";
import {setString} from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isLoggingIn = true;
  user: User;


  constructor(private router:RouterExtensions, private loginService : LoginService) {
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
        this.loginService.authenticate({email: this.user.email , password: this.user.password})
        .subscribe((result : any)=>{

          console.log(result);

          setString("token",result.token.accessToken);

          this.router.navigate(['/home',{clearHistory:true}]);
      
        }, (error) => {
          
          this.alert(error.error.message);
        }
        )
  }

  alert(message: string) {
      return alert({
          title: "Error",
          okButtonText: "OK",
          message: message
      });
  }

}
