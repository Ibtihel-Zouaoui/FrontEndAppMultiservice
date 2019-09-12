import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var addclient: string='http://localhost:9000/user/add';
var addouvrier: string='http://localhost:9000/user/addouv';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http: HttpClient) { }

  addClient(user)
     {
     
      return this.http.post(addclient,user)
     }
     addOuvrier(user)
     {
     
      return this.http.post(addouvrier,user)
     }
}
