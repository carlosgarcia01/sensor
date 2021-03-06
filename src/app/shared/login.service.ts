import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://sensortest.herokuapp.com/";
  



  constructor(private http: HttpClient ) { }

 
  
  authenticate( data: any){
    
    let headers = new HttpHeaders({
      "Content-Type" : "application/json"

    });
    return this.http.post(this.serverUrl+"api/users/authenticate",data,{headers:headers});
  }




}
