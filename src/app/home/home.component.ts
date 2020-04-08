import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router';
import {User} from "../../app/models/User";
import {UserService} from "../../app/shared/user.service";
import { clear } from "tns-core-modules/application-settings";
import { PeopleService } from '../shared/people.service';
import { EventData } from "tns-core-modules/ui/page/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator/activity-indicator";



@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router:RouterExtensions, 
                private userService : UserService,
                private peopleService : PeopleService
                ) {
        // Use the component constructor to inject providers.
    }

    usuarios : Array<User>;
    document: String="";
    person:any;
    isBusy: boolean = false;
    

    ngOnInit(): void {
        // Init your component properties here.
    /*     this.userService.getUsers().subscribe((result : any) => {
            console.log(result);
            //this.usuarios = result.users;
        } */



        
    }


    exit(){
        clear();
        this.router.navigate(['/login'],{clearHistory:true});
    }

    useCamera(){
        this.router.navigate(['/camera'],{clearHistory:true}); 
    }


    getPerson(){

        this.peopleService.getUser(this.document)
                    .subscribe(res=> {
                        this.person=res
                        console.log(res)
                    });

    }
    onBusyChanged(args: EventData) {
        let indicator: ActivityIndicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }
}
