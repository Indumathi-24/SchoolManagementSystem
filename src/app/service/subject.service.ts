import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl = "http://localhost:8086/api/subject"
  constructor(private http:HttpClient) { }

  saveSubjectDetails(subjectDetail:Subject):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`,subjectDetail);
  }
  getSubjects():Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getSubjectName(code:string):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${code}`);
  }

  getSubjectList(subjectCodeList:String[]):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/subjectList/'+`${subjectCodeList}`);
  }
}
