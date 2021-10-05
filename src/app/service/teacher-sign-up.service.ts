import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../model/teacher';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class TeacherSignUpService {
  private baseUrl="http://localhost:8086/api/teacher"
  constructor(private http:HttpClient) { }
  saveDetails(teacherDetail:Teacher):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}` , teacherDetail);
  }
  
  getAllDetails():Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`);
  }

  getDetails(id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${id}`);
  }

  updateDetails(id:number,teacherDetail:Teacher):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+'/'+`${id}`,teacherDetail);
  }
}
