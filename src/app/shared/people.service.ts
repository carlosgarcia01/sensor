import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from 'tns-core-modules/application-settings';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private serverUrl = "https://sensortest.herokuapp.com/";

  person: Person;

  constructor(private http: HttpClient) { }



  getUser(document:any){
    //console.log(document)
    let headers = this.crearRequestHeader()
   return this.http.get(`${this.serverUrl}api/users/${document}`,{headers});

  }


  putUser(){
    
  }

  private crearRequestHeader () {
    let headers = new HttpHeaders({
     ///"Authorization": "Bearer "+ getString("token"),
      "Content-Type" : "application/json"

    });

    return headers;

  }
}
