import {
    Component,
    OnInit
} from '@angular/core';
import {
    Page
} from "tns-core-modules/ui/page";

import {
  PageRoute
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
        private route:PageRoute) 
        {
        this.page.actionBarHidden = true;
        this.person=new Person();
        this.getPerson();

        }

    ngOnInit(): void {

    }

     getPerson(){
        let document;
        this.route.activatedRoute.subscribe(res =>res.params.subscribe(res => document=res.document));
        this.peopleService.getUser(document)
        .subscribe(res => 
            console.log(res)
        ); 
        

        console.log(this.person.name, this.person.document)
        console.log(this.person)
    }


}
