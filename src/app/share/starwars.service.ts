import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor( public  http: HttpClient) {

    this.http = http;

   }

   getPeliculas(){
     return this.http.get("https://swapi.co/api/films");
   }
}
