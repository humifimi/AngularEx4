import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ServicePostService {

  constructor(private http : Http) {

   }
   getmyData(){
      return this.http.get("http://jsonplaceholder.typicode.com/users/1");
   }

}
