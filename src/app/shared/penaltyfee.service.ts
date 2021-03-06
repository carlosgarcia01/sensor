import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { getString } from 'tns-core-modules/application-settings';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class PenaltyfeeService {
  private serverUrl = "https://sensortest.herokuapp.com/";
  private token:string;
  private newUser;

  



  constructor(private http: HttpClient,
              private peopleService:PeopleService ) { }


  putPenaltyfee(){
    this.newUser={
      "document":this.peopleService.person.document,
      "name":this.peopleService.person.name,
      "lastname":this.peopleService.person.lastname,
      "occupation":this.peopleService.person.occupation,
      "email":this.peopleService.person.email
    }
    let headers = this.crearRequestHeader();
    return this.http.put(this.serverUrl+`api/users/${this.peopleService.person._id}`,this.newUser,{headers});

  }

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
