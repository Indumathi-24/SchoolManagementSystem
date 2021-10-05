import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/model/response';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  
  private baseUrl ="http://localhost:8086/api/result/";
  constructor(private http:HttpClient) { }

  saveResultDetails(roomNo:number,rollNo:number,resultDetail:Result):Observable<Response>
  {
    return this.http.post(`${this.baseUrl}`+`${roomNo}`+'/'+`${rollNo}`,resultDetail);
  }
  getParticularResult(rollNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+ `${rollNo}`);
  }
  updateParticularResult(rollNo:number,resultId:number,resultDetail:Result):Observable<Response>
  {
    return this.http.put(`${this.baseUrl}`+ `${rollNo}`+'/'+`${resultId}`,resultDetail);
  }
  getResultByClass(roomNo:number):Observable<Response>
  {
    return this.http.get(`${this.baseUrl}`+ 'class/'+`${roomNo}`);
  }
}
