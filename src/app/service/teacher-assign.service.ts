import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherSubject } from '../model/teacher-subject';
import {Response} from 'src/app/model/response';
@Injectable({
  providedIn: 'root'
})
export class TeacherAssignService {

  private baseUrl ="http://localhost:8086/api/teacherSubject"
  constructor(private http:HttpClient) { }

  assignTeacherSubject(teacherSubjectDetail:TeacherSubject):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`,teacherSubjectDetail);
  }

  getSubjectClassAssignId(teacherId:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${teacherId}`);
  }
}
