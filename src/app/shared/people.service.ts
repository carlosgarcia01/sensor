import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private serverUrl = "https://sensortest.herokuapp.com/";

  constructor(private http: HttpClient) { }



  getUser(document:any){
    let headers = this.crearRequestHeader()
    return this.http.get(`${this.serverUrl}api/person/${document}`,{headers});

  }

  private crearRequestHeader () {
    let headers = new HttpHeaders({
     "Authorization": "Bearer "+ getString("token"),
      "Content-Type" : "application/json"

    });

    return headers;

  }
}
