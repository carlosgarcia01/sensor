import {
    Component,
    OnInit
} from '@angular/core';
import {
    Page
} from "tns-core-modules/ui/page";

import {
  PageRoute, RouterExtensions
} from 'nativescript-angular/router';

import {
    PeopleService
} from '../shared/people.service';

import {  
    Person
} from '../models/Person';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
    selector: 'ns-penaltyfee',
    templateUrl: './penaltyfee.component.html',
    styleUrls: ['./penaltyfee.component.css']
})
export class PenaltyfeeComponent implements OnInit {


    person: Person;

    constructor(private page: Page,
        private peopleService: PeopleService,
        private route:PageRoute,
        private router:RouterExtensions) 
        {
        this.page.actionBarHidden = false;
        this.person=new Person();
        this.person=this.peopleService.person;
        

        }

    ngOnInit(): void {

    }


    save(){
        
    }

    goBack(){
        this.router.navigate(['/home'],{clearHistory:true});
    }




}
