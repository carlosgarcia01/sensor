import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from 'tns-core-modules/application-settings/application-settings';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private serverUrl = "https://sensortest.herokuapp.com/";
  private token:string;



  constructor(private http: HttpClient ) { }

  getRegisters(){

    let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl+"api/registers",{headers});

  }


  private crearRequestHeader () {
    let headers = new HttpHeaders({
     "Authorization": "Bearer "+ getString("token"),
      "Content-Type" : "application/json"

    });

    return headers;

  }
}
