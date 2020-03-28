import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { getString } from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl = "https://sensortest.herokuapp.com/";
  private token:string;



  constructor(private http: HttpClient ) { }

  getUsers(){

    let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl+"api/users",{headers});

  }


  private crearRequestHeader () {
    let headers = new HttpHeaders({
     "Authorization": "Bearer "+ getString("token"),
      "Content-Type" : "application/json"

    });

    return headers;

  }

  
  authenticate( data: any){
    
    let headers = new HttpHeaders({
      "Content-Type" : "application/json"

    });
    return this.http.post(this.serverUrl+"api/users/authenticate",data,{headers:headers});
  }

 



}
