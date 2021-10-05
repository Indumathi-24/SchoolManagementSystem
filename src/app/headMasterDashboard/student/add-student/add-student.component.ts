import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { Response } from 'src/app/model/response';
import { ClassRoom } from 'src/app/model/class-room';
import { ResultService } from 'src/app/service/result.service';
import { Result } from 'src/app/model/result';
import { Mark } from 'src/app/model/mark';
import { MarkService } from 'src/app/service/mark.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddParentComponent } from '../../parent/add-parent/add-parent.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
   StudentForm=new FormGroup({
     rollNo:new FormControl('',[Validators.required]),
     name:new FormControl(''),
     dateOfBirth:new FormControl(''),
     gender:new FormControl(''),
     address:new FormControl(''),
     standard:new FormControl(''),
     section:new FormControl('')
   })
   studentDetail: Student = new Student();
   classList: ClassRoom[] =[];
   classDetail:ClassRoom = new ClassRoom();
   standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
   sectionList:string[]=['A','B','C','D','E'];
   roomNo:number =0;
   studentId:number=0;
  constructor(private dialog: MatDialog,private markService:MarkService,private resultService:ResultService,private classRoomService:ClassService,private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    const binary = Math.random().toString(16).substr(2, 8); 
    console.log(binary);
  }

  getRoomNo()
  {
    this.classRoomService.getRoomNo(this.StudentForm.get('standard')?.value,this.StudentForm.get('section')?.value).subscribe(data=>{
      let response:Response = data;
      this.roomNo = response.data;
    },error=>{
      window.alert(error.error.statusText)
    })
  }

  saveStudent()
  {
      this.studentDetail.rollNo = this.StudentForm.get('rollNo')?.value;
      this.studentDetail.name = this.StudentForm.get('name')?.value;
      this.studentDetail.dateOfBirth =this.StudentForm.get('dateOfBirth')?.value;
      this.studentDetail.gender = this.StudentForm.get('gender')?.value;
      this.studentDetail.address = this.StudentForm.get('address')?.value;
      this.studentDetail.password = Math.random().toString(16).substr(2, 8);
      console.log(this.studentDetail);
      this.studentService.saveStudent(this.studentDetail,this.roomNo).subscribe(data=>{
        let response:Response = data;
        this.studentId = response.data;
        window.alert(response.statusText);

      console.log("inside Result");
      const resultDetail:Result = new Result();
      let studentDetail:Student = new Student();
      const classDetail:ClassRoom = new ClassRoom();
      studentDetail.rollNo = this.StudentForm.get('rollNo')?.value;
      resultDetail.student = studentDetail;
      classDetail.roomNo = this.StudentForm.get('roomNo')?.value;
      resultDetail.classDetail = classDetail;
      console.log(resultDetail);
      this.resultService.saveResultDetails(this.roomNo,this.StudentForm.get('rollNo')?.value,resultDetail).subscribe(data=>{
       let response:Response = data;
    

    console.log("inside mark")
    const markDetail:Mark = new Mark();
    markDetail.studentEntity = studentDetail;
    for(let i=0;i<3;i++)
    {
      if(i==0)
      {
        console.log('first term');
        markDetail.termType = 'I'
        this.markService.saveStudentDetailsForMark(markDetail,this.StudentForm.get('rollNo')?.value).subscribe(data=>{
          let response:Response = data;
        },error=>{
          window.alert(error.error.statusText)
        })
      }
      else if(i==1)
      {
        console.log('second term');
        markDetail.termType = 'II'
        this.markService.saveStudentDetailsForMark(markDetail,this.StudentForm.get('rollNo')?.value).subscribe(data=>{
          let response:Response = data;
        },error=>{
          window.alert(error.error.statusText)
        })
      }
     else
      {
        console.log('third term');
        markDetail.termType = 'III'
        this.markService.saveStudentDetailsForMark(markDetail,this.StudentForm.get('rollNo')?.value).subscribe(data=>{
          let response:Response = data;
        },error=>{
          window.alert(error.error.statusText)
        })
      }
    }
  },error=>{
    window.alert(error.error.statusText)
  })
},error=>{
  window.alert(error.error.statusText)
})
      
localStorage.setItem('rollNo',this.StudentForm.get('rollNo')?.value);
      
  }
  back()
  {
      this.router.navigate(['headmastermodule']);
  }

  saveParentDetails()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddParentComponent,dialogConfig);
  }

  get rollNo()
  { return this.StudentForm.get('rollNo');}
}
