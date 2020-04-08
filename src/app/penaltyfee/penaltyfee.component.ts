import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-penaltyfee',
  templateUrl: './penaltyfee.component.html',
  styleUrls: ['./penaltyfee.component.css']
})
export class PenaltyfeeComponent implements OnInit {

  constructor(private page:Page) { 
    this.page.actionBarHidden = true;




  }

  ngOnInit(): void {
  }

}
