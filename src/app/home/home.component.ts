import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router';
import {User} from "../../app/models/User";
import {UserService} from "../../app/shared/user.service";
import { clear } from "tns-core-modules/application-settings";

import { EventData } from "tns-core-modules/ui/page/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator/activity-indicator";



@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    usuarios : Array<User>;
    document: String="";

    constructor(private router:RouterExtensions, 
                private userService : UserService,
                ) {
    }

 
    

    ngOnInit(): void {
    }


    exit(){
        clear();
        this.router.navigate(['/login'],{clearHistory:true});
    }

    useCamera(){
        this.router.navigate(['/camera'],{clearHistory:true}); 
    }


    onBusyChanged(args: EventData) {
        let indicator: ActivityIndicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }

    
  alert(message: string) {
    return alert({
        title: "Error",
        okButtonText: "OK",
        message: message
    });
}
}
