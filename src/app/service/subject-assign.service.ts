import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { SubjectClass } from '../model/subject-class';


@Injectable({
  providedIn: 'root'
})
export class SubjectAssignService {

  private baseUrl = "http://localhost:8086/api/subjectClass"

  constructor(private http:HttpClient) { }

  assignSubjectClass(subjectClassDetail:SubjectClass):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`,subjectClassDetail);
  }

  viewSubjectClass(roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${roomNo}`);
  }

  getSubjectAssignId(code:string,roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+ `${code}`+'/'+`${roomNo}`);
  }

  getRoomNoForId(id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/subjectAssign/'+`${id}`);
  }

  getSubjectCode(roomNo:number,id:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/subjectCode/'+`${roomNo}`+'/'+`${id}`);
  }

  getRoomNoList(assignIdList:number[]):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/subjectAssignList/'+`${assignIdList}`);
  }

  getSubjectCodeList(roomNo:number,assignIdList:number[]):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/subjectCodeList/'+`${roomNo}`+'/'+`${assignIdList}`);
  }
}
