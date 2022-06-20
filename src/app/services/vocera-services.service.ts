import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoceraServices {

  constructor(private httpClient : HttpClient) { }

  getmyProfile(user:any){
    const url = 'https://api.github.com/users/'+user;
    return this.httpClient.get(url);
  }
 
}
