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

  TeacherForGotPasswordForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })


  constructor(private teacherLoginService: TeacherLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTeacherForgotPassword() {
    let teacherLogin: TeacherLogin = new TeacherLogin();
    teacherLogin.password = this.TeacherForGotPasswordForm.get('password')?.value;
    if (teacherLogin.password == this.TeacherForGotPasswordForm.get('confirmPassword')?.value) {

      this.teacherLoginService.updateLoginDetails(this.TeacherForGotPasswordForm.get('userId')?.value, teacherLogin)
        .subscribe(data => {
          console.log(data)
          let response: Response = data;
          window.alert(response.statusText)
        });
      this.router.navigate(['headMasterLogin']);
    }
    else {
      window.alert("Enter same password and confirmPassword")
    }

  }
  get userId() {
    return this.TeacherForGotPasswordForm.get('userId');
  }
  get password() {
    return this.TeacherForGotPasswordForm.get('password');
  }
  get confirmPassword() {
    return this.TeacherForGotPasswordForm.get('confirmPassword');
  }
}
