import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { getString } from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root'
})
export class PenaltyfeeService {
  private serverUrl = "https://sensortest.herokuapp.com/";
  private token:string;



  constructor(private http: HttpClient ) { }

  getPenaltyfee(){

    let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl+"api/penaltyfee",{headers});

  }


  private crearRequestHeader () {
    let headers = new HttpHeaders({
     "Authorization": "Bearer "+ getString("token"),
      "Content-Type" : "application/json"

    });

    return headers;

  }

  

 



}
