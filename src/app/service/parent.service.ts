import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response} from 'src/app/model/response'
import { Parent } from '../model/parent';
@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private baseUrl="http://localhost:8086/api/parent/"
  constructor(private http:HttpClient) { }

  saveParentDetails(rollNo:number,parentDetail:Parent):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+`${rollNo}`,parentDetail);
  }
  
  getParentDetails(rollNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+`${rollNo}`);
  }

  updateParentDetails(id:number,parentDetail:Parent):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+`${id}`,parentDetail);
  }
}
