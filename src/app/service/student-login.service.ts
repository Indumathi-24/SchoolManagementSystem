import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentLogin } from '../model/student-login';
import { Response} from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {
  private baseUrl="http://localhost:8086/api/studentLogin/"
  constructor(private http:HttpClient) { }

  saveLoginDetails(id:number,studentLoginDetail:StudentLogin):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+`${id}`,studentLoginDetail);
  }

  getLoginDetails(id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+`${id}`);
  }

  getParticularId(autoId:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'studentLoginId/'+`${autoId}`);
  }

  updateLoginDetails(id:number,studentLogin:StudentLogin):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+`${id}`,studentLogin);
  }
}
