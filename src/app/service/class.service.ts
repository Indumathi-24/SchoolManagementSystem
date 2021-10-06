import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassRoom } from '../model/class-room';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  
  private baseUrl="http://localhost:8086/api/class"
  constructor(private http:HttpClient) {}
  
  saveClassRoomDetails(classDetail:ClassRoom):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`,classDetail);
  }
  
  getClassDetails():Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getClass(roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${roomNo}`);
  }
  getParticularClassDetails(roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/'+`${roomNo}`);
  }
  updateClassRoomDetails(roomNo:number,classDetail:ClassRoom):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+'/'+`${roomNo}`,classDetail);
  }

  getRoomNo(standard:string,section:string):Observable<Response>
  {
      return this.http.get(`${this.baseUrl}`+'/'+`${standard}`+'/'+`${section}`)
  }

  getClassList(roomNoList:number[]):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+'/roomNoList/'+`${roomNoList}`);
  }
}
