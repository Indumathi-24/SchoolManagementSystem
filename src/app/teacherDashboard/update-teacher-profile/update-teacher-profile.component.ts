import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TeacherSignUpService } from 'src/app/service/teacher-sign-up.service';
import { Response } from 'src/app/model/response';
import { Teacher } from 'src/app/model/teacher';

@Component({
  selector: 'app-update-teacher-profile',
  templateUrl: './update-teacher-profile.component.html',
  styleUrls: ['./update-teacher-profile.component.css']
})
export class UpdateTeacherProfileComponent implements OnInit {

  teacherDetail:Teacher=new Teacher();
  constructor(public dialogRef:MatDialogRef<UpdateTeacherProfileComponent>,private teacherService:TeacherSignUpService) { }

  teacherId: number = Number(localStorage.getItem('user'));
  ngOnInit(): void {
    this.teacherService.getDetails(Number(this.teacherId)).subscribe(data=>{
      let response:Response = data;
      this.teacherDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }

  updatePersonalDetails()
  {
      this.teacherService.updateDetails(Number(this.teacherId),this.teacherDetail).subscribe(data=>{
        let response:Response = data;
        window.alert(response.statusText);
      },error=>{
        window.alert(error.error.statusText);
      })

      this.dialogRef.close();
  }

  
     
  
}
