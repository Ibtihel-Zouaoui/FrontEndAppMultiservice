import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var adduser: string='http://localhost:9000/test/add';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http: HttpClient) { }

  adduser(user)
     {
     
      return this.http.post(adduser,user)
     }
}
