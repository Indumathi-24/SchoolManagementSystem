import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/service/parent.service';
import { StudentService } from 'src/app/service/student.service';
import { Response } from 'src/app/model/response';
import { Student } from 'src/app/model/student';
import { Parent } from 'src/app/model/parent';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateStudentProfileComponent } from '../update-student-profile/update-student-profile.component';

@Component({
  selector: 'app-view-student-profile',
  templateUrl: './view-student-profile.component.html',
  styleUrls: ['./view-student-profile.component.css']
})
export class ViewStudentProfileComponent implements OnInit {

  student:Student=new Student();
  parents:Parent[] = [];
  constructor(private dialog:MatDialog,private studentService:StudentService,private parentService:ParentService) { }

  studentId:number = Number(localStorage.getItem('user'));
  ngOnInit(): void {
    this.studentService.getParticularStudent(this.studentId).subscribe(data=>{
      let response:Response=data;
      this.student = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
    this.parentService.getParentDetails(this.studentId).subscribe(data=>{
      let response:Response =data;
      this.parents = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }
   update()
   {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateStudentProfileComponent,{
      height: '90%',
      width: '60%'
  });
   }
}
