import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router:RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    exit(){
        this.router.navigate(['/login'],{clearHistory:true});
    }
}
