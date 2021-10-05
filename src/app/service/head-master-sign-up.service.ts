import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadMaster } from '../model/head-master';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class HeadMasterSignUpService {
  private baseUrl="http://localhost:8086/api/headMaster"
  constructor(private http:HttpClient) { }
  saveDetails(headMasterDetail:HeadMaster):Observable<Response>{
    console.log("add method");
    return this.http.post(`${this.baseUrl}`,headMasterDetail);
  }

  getDetails(id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${id}`);
  }

  updateDetails(id:number,headMasterDetail:HeadMaster):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+'/'+`${id}`,headMasterDetail);
  }
}
