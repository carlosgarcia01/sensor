import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router';
import {User} from "../../app/models/User";
import {UserService} from "../../app/shared/user.service";
import { clear } from "tns-core-modules/application-settings";

import { EventData } from "tns-core-modules/ui/page/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator/activity-indicator";
import { PeopleService } from "../shared/people.service";
import { RfidService } from "../shared/rfid.service";



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
                private rfidService:RfidService
                ) 
                {
                (peopleService.person)? 
                        this.document=peopleService.person.document:
                        this.document="1053"
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

    changeState(state:string){
       let result= this.rfidService.putRfid(state).subscribe();
       //console.log(result)
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
