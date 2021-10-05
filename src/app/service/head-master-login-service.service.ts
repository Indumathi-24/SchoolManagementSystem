import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadMasterLogin } from '../model/head-master-login';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class HeadMasterLoginServiceService {
  private baseUrl="http://localhost:8086/api/headMasterLogin/"
  constructor(private http:HttpClient) { }
  saveLoginDetails(id:number,headMasterLogin:HeadMasterLogin):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+`${id}`,headMasterLogin);
  }
  getLoginDetails(id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+`${id}`);
  }
  getParticularId(autoId:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'loginId/'+`${autoId}`);
  }
  updateLoginDetails(id:number,headMasterLogin:HeadMasterLogin):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+`${id}`,headMasterLogin);
  }
}
