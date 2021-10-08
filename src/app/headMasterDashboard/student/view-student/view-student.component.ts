import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  ViewStudents =new FormGroup({
    standard:new FormControl(''),
     section:new FormControl('')
  }) 

  studentList : Student[]=[];
  length:number =0;
  roomNo:number=0;
  standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  sectionList:string[]=['A','B','C','D','E'];
  constructor(private classRoomService:ClassService ,private studentService:StudentService) { }
  
 
  ngOnInit(): void {
   
  }
  
  getRoomNo()
  {
    this.classRoomService.getRoomNo(this.ViewStudents.get('standard')?.value,this.ViewStudents.get('section')?.value).subscribe(data=>{
      let response:Response = data;
      this.roomNo = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }
  
  getDetails()
   {
     
     this.studentService.getAllStudent(this.roomNo).subscribe(data=>{
       let response:Response = data;
       this.studentList = response.data;
       this.length=this.studentList.length;
     },error=>{
      window.alert(error.error.statusText);
    })
   }

}
