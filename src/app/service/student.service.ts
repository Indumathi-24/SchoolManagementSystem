import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl="http://localhost:8086/api/student/"
  constructor(private http:HttpClient) { }

  saveStudent(studentDetail:Student,roomNo:number):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+`${roomNo}`,studentDetail);
  }
   
  getAllStudent(roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+`${roomNo}`);
  }
  getParticularStudent(rollNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'studentDetail/'+`${rollNo}`);
  }

  deleteParticularStudent(roomNo:number,rollNo:number):Observable<Response>
  {
    return this.http.delete(`${this.baseUrl}`+`${roomNo}`+'/'+`${rollNo}`);
  }
  
  updateParticularStudent(roomNo:number,rollNo:number,studentDetail:Student):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+`${roomNo}`+'/'+`${rollNo}`,studentDetail);
  }

  getStudentRoomNo(rollNo:number)
  {
    return this.http.get(`${this.baseUrl}`+'class/'+`${rollNo}`)
  }
}
