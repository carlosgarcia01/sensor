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
import { PenaltyfeeService } from '../shared/penaltyfee.service';
@Component({
    selector: 'ns-penaltyfee',
    templateUrl: './penaltyfee.component.html',
    styleUrls: ['./penaltyfee.component.css']
})
export class PenaltyfeeComponent implements OnInit {


    person: Person;
    isBusy: boolean = false;

    constructor(private page: Page,
        private peopleService: PeopleService,
        private route:PageRoute,
        private router:RouterExtensions, 
        private penaltyfee:PenaltyfeeService) 
        {
        this.page.actionBarHidden = false;
        this.person=new Person();
        this.person=this.peopleService.person;
        

        }

    ngOnInit(): void {

    }


    save(){
        this.isBusy=true;
        this.penaltyfee.putPenaltyfee().subscribe();
        this.isBusy=false;
        this.router.navigate(['/home'],{clearHistory:true});
    }

    goBack(){
        this.router.navigate(['/home'],{clearHistory:true});
    }




}
