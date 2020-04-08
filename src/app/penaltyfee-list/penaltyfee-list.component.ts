import { Component, OnInit } from '@angular/core';
import { PenaltyfeeService } from '../shared/penaltyfee.service';

@Component({
  selector: 'ns-penaltyfee-list',
  templateUrl: './penaltyfee-list.component.html',
  styleUrls: ['./penaltyfee-list.component.css']
})
export class PenaltyfeeListComponent implements OnInit {

  penaltyfees:Array<string>;

  constructor(private _penaltyfeeService:PenaltyfeeService) { }

  ngOnInit(): void {

    this._penaltyfeeService.getPenaltyfee()
    .subscribe((result:any) =>{
        console.log(result);
        this.penaltyfees=result.penaltyfees
    })

  }

}
