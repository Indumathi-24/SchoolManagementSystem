import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { TeacherSignUpService } from 'src/app/service/teacher-sign-up.service';
import { Response } from 'src/app/model/response';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateTeacherProfileComponent } from '../update-teacher-profile/update-teacher-profile.component';

@Component({
  selector: 'app-view-teacher-profile',
  templateUrl: './view-teacher-profile.component.html',
  styleUrls: ['./view-teacher-profile.component.css']
})
export class ViewTeacherProfileComponent implements OnInit {

  teacherDetail:Teacher= new Teacher();
  constructor(private dialog:MatDialog,private teacherService:TeacherSignUpService) { }
   
  teacherId: number = Number(localStorage.getItem('user'));
  ngOnInit(): void {
    this.teacherService.getDetails(Number(this.teacherId)).subscribe(data=>{
      let response:Response = data;
      this.teacherDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }

  update()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateTeacherProfileComponent,{
      height: '90%',
      width: '60%'
  });
  }

}
