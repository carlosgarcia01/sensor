import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {RouterExtensions} from 'nativescript-angular/router';
import {LoginService} from "../shared/login.service";
import {setString} from "tns-core-modules/application-settings";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isLoggingIn = true;
  user: User;
  isBusy: boolean = false;


  constructor(private router:RouterExtensions,
              private loginService : LoginService,
              private page:Page) {
      this.user = new User();
      this.user.email="carlos23@gmail.com";
      this.user.password="helloworld";
      this.page.actionBarHidden = true;
  }



  toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
     this.isBusy=true;
     if (!this.user.email || !this.user.password) {
          this.alert("Please provide both an email address and password.");
          return;
      } else
        this.loginService.authenticate({email: this.user.email , password: this.user.password})
        .subscribe((result : any)=>{

          //console.log(result);

          setString("token",result.token.accessToken);
          this.isBusy=false;
          this.router.navigate(['/home',{clearHistory:true}]);
      
        }, (error) => {
          this.isBusy=false;   
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

  onBusyChanged(args: EventData) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
}

}
