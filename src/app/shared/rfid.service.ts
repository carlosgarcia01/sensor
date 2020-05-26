import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from 'tns-core-modules/application-settings/application-settings';

@Injectable({
  providedIn: 'root'
})
export class RfidService {
  private serverUrl = "https://sensortest.herokuapp.com/";



  constructor(private http: HttpClient ) { }

  putRfid(state:string){
    let data = {"state":state}
    let headers = this.crearRequestHeader();
    return this.http.put(this.serverUrl+"api/rfids/5ecd6f4d7cd62d00179b5608",data,{headers});

  }


  private crearRequestHeader () {
    let headers = new HttpHeaders({
     "Authorization": "Bearer "+ getString("token"),
      "Content-Type" : "application/json"

    });

    return headers;

  }
}
