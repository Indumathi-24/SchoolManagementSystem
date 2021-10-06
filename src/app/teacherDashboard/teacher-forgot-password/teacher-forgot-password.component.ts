import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadMasterLogin } from 'src/app/model/head-master-login';
import { Response } from 'src/app/model/response';
import { TeacherLogin } from 'src/app/model/teacher-login';
import { TeacherLoginService } from 'src/app/service/teacher-login.service';

@Component({
  selector: 'app-teacher-forgot-password',
  templateUrl: './teacher-forgot-password.component.html',
  styleUrls: ['./teacher-forgot-password.component.css']
})
export class TeacherForgotPasswordComponent implements OnInit {



  teacherLoginDetail: TeacherLogin = new TeacherLogin();
  teacherId: number = Number(localStorage.getItem('user'));
  password:string='';
  confirmPassword:string='';
  teacherLogin: TeacherLogin = new TeacherLogin();

  constructor(private teacherLoginService: TeacherLoginService, private router: Router) { }

  
  ngOnInit(): void {
    this.teacherLoginService.getLoginDetails(this.teacherId)
      .subscribe(data => {
        let response: Response = data;
        this.teacherLoginDetail = response.data;
      },error=>{
        window.alert(error.error.statusText);
      })
  }
  
 
  updateTeacherPassword() {
    this.teacherLoginDetail.password = this.password
    if (this.teacherLoginDetail.password == this.confirmPassword) {

      this.teacherLoginService.updateLoginDetails(this.teacherId, this.teacherLoginDetail)
        .subscribe(data => {
          let response: Response = data;
          this.teacherLogin = response.data;
          window.alert(response.statusText)
        },error=>{
          window.alert(error.error.statusText);
        });
      if(this.teacherLogin!=null)
      {
      this.router.navigate(['teachermodule']);
      }
    }
    else {
      window.alert("Enter same password and confirmPassword")
    }

  }

}
