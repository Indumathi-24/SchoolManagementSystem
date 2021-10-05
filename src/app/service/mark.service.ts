import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response} from 'src/app/model/response';
import { Mark } from '../model/mark';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  private baseUrl = "http://localhost:8086/api/mark/"
  constructor(private http:HttpClient) { }

  saveStudentDetailsForMark(markDetail:Mark,rollNo:number):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+ `${rollNo}`,markDetail);
  }
  updateMarkDetails(code:string,rollNo:number,markDetail:Mark):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+`${code}`+'/'+`${rollNo}`,markDetail);
  }

  getParticularSubjectMark(rollNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+`${rollNo}`);
  }

  getAllStudentMark(roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'studentsMarks'+'/'+`${roomNo}`);
  }
}
