import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherLogin } from 'src/app/model/teacher-login';
import { TeacherLoginService } from 'src/app/service/teacher-login.service';
import { Response } from 'src/app/model/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login-credentials',
  templateUrl: './teacher-login-credentials.component.html',
  styleUrls: ['./teacher-login-credentials.component.css']
})
export class TeacherLoginCredentialsComponent implements OnInit {

  TeacherLoginCredentialsForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  loginId:number=0;
  constructor(private teacherLoginService: TeacherLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginCredentials() {
    let teacherLogin: TeacherLogin = new TeacherLogin();
    teacherLogin.password = this.TeacherLoginCredentialsForm.get('password')?.value;
    if (this.TeacherLoginCredentialsForm.get('password')?.value == this.TeacherLoginCredentialsForm.get('confirmPassword')?.value) {
      this.teacherLoginService.saveLoginDetails(this.TeacherLoginCredentialsForm.get('userId')?.value, teacherLogin)
        .subscribe(data => {
          let response: Response = data;
          this.loginId = response.data;
          window.alert(response.statusText)
        }, error => {
          window.alert(error.error.statusText);
        });
      if(this.loginId!=null)
      {
      this.router.navigate(['teacherlogin']);
      }
      this.TeacherLoginCredentialsForm.reset();
    }

    else {
      window.alert("You entered the password wrongly");
    }
  }

  get userId() {
    return this.TeacherLoginCredentialsForm.get('userId');
  }
  get password() {
    return this.TeacherLoginCredentialsForm.get('password');
  }
  get confirmPassword() {
    return this.TeacherLoginCredentialsForm.get('confirmPassword');
  }
}
