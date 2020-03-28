import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router';
import {User} from "../../app/models/User";
import {UserService} from "../../app/shared/user.service";
import {PenaltyfeeService} from "../../app/shared/penaltyfee.service";



@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router:RouterExtensions, 
                private userService : UserService,
                private _penaltyfeeService:PenaltyfeeService
                ) {
        // Use the component constructor to inject providers.
    }

    usuarios : Array<User>;
    penaltyfee:Array<string>;

    ngOnInit(): void {
        // Init your component properties here.
    /*     this.userService.getUsers().subscribe((result : any) => {
            console.log(result);
            //this.usuarios = result.users;
        } */


        this._penaltyfeeService.getPenaltyfee()
            .subscribe((result:any) =>
                        this.penaltyfee=result.penaltyfees)
        
    }


    exit(){
        this.router.navigate(['/login'],{clearHistory:true});
    }
}
