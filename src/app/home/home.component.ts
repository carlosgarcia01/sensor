import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router';
import {User} from "../../app/models/User";
import {UserService} from "../../app/shared/user.service";
import { clear } from "tns-core-modules/application-settings";

import { EventData } from "tns-core-modules/ui/page/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator/activity-indicator";
import { PeopleService } from "../shared/people.service";



@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    usuarios : Array<User>;
    document: String="";
    isBusy: boolean = false;

    constructor(private router:RouterExtensions, 
                private peopleService: PeopleService,
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

    getRegisters(){
        this.router.navigate(['/registers'],{clearHistory:true}); 
    }


    sendDocument(){
        this.isBusy=true;
        if(this.document.length>0){

           this.peopleService.getUser(this.document)
            .subscribe((res:any) => {
                if(res.user[0]){
                    this.peopleService.person = res.user[0];
                    this.isBusy=false;
                    this.router.navigate(['/penaltyfee'],{clearHistory:true});
                    return;
                }else{
                    this.alert('Please, Enter Document other');
                    this.isBusy=false;
                    return;
                }

/* 
                    if(res.user[0]){
                        this.router.navigate(['/penaltyfee',this.document],{clearHistory:true}); 
                        this.isBusy=false;
                        return;
                    }else{
                        this.alert('Please, Enter Document other');
                        this.isBusy=false;
                        return;
                    } */
            }); 

        }else{
            this.alert('Please, Enter Document');
            this.isBusy=false;
        }    
    }


    onBusyChanged(args: EventData) {
        let indicator: ActivityIndicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }


    validateDocument(docuemnt:any){

    }

    
  alert(message: string) {
    return alert({
        title: "Error",
        okButtonText: "OK",
        message: message
    });
}
}
