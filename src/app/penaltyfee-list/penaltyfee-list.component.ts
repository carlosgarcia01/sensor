import { Component, OnInit } from '@angular/core';
import { PenaltyfeeService } from '../shared/penaltyfee.service';
import { RegisterService } from '../shared/register.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-penaltyfee-list',
  templateUrl: './penaltyfee-list.component.html',
  styleUrls: ['./penaltyfee-list.component.css']
})
export class PenaltyfeeListComponent implements OnInit {

  registers:Array<string>;

  constructor(private _registerService:RegisterService,
              private router:RouterExtensions) { }

  ngOnInit(): void {

    this._registerService.getRegisters()
    .subscribe((result:any) =>{
        this.registers=result.registers
    })

  }

  goBack(){
      this.router.navigate(['/home'],{clearHistory:true});
  }

}
