import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://sensortest.herokuapp.com/";
  private token:string;



  constructor(private http: HttpClient ) { }

  private crearRequestHeader () {
    let headers = new HttpHeaders({
      "Authorization": "Bearer "+ this.token,
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

  /*
  getUsers()
    {
      this.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTdhY2JjZDBjYjczZjAwMTc2OTBhYWIiLCJpYXQiOjE1ODUxNzY4NDEsImV4cCI6MTU4NTE3Nzc0MX0.wceehejA7GMxzfbXHT-auZDUnbSU044Hjvgt9zlHSmA";
      let headers = this.crearRequestHeader();
      return this.http.get(this.serverUrl+"api/users",{headers});
    }*/



}
