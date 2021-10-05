import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { TeacherLogin } from '../model/teacher-login';

@Injectable({
  providedIn: 'root'
})
export class TeacherLoginService {

  private baseUrl="http://localhost:8086/api/login/"
  constructor(private http:HttpClient) { }

  saveLoginDetails(id:number,teacherLoginDetail:TeacherLogin):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+`${id}`,teacherLoginDetail);
  }

  getLoginDetails(id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+`${id}`);
  }

  getParticularId(autoId:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'teacherLoginId/'+`${autoId}`);
  }

  updateLoginDetails(id:number,teacherLogin:TeacherLogin):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+`${id}`,teacherLogin);
  }
}
