import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from 'src/app/model/response';
import { TeacherLogin } from 'src/app/model/teacher-login';
import { TeacherLoginService } from 'src/app/service/teacher-login.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  TeacherLogin = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private teacherLoginService: TeacherLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.teacherLoginService.getLoginDetails(this.TeacherLogin.get('userId')?.value)
      .subscribe(data => {
        let response: Response = data;
        let teacherLoginDetail: TeacherLogin = new TeacherLogin();
        teacherLoginDetail = response.data;
        this.teacherLoginService.getParticularId(Number(teacherLoginDetail.autoId)).subscribe(data => {
          let response: Response = data;
          let teacherLoginId:number = response.data;
          if (teacherLoginId == this.TeacherLogin.get('userId')?.value && teacherLoginDetail.password == this.TeacherLogin.get('password')?.value) {
            window.alert("Logged in Successfully");
            localStorage.setItem("user", String(teacherLoginId))
            this.router.navigate(['teachermodule/addmark']);
          }

          if (teacherLoginId != this.TeacherLogin.get('userId')?.value && teacherLoginDetail.password != this.TeacherLogin.get('password')?.value) {
            window.alert("Enter valid user or password");
          }

          if (teacherLoginDetail.password != this.TeacherLogin.get('password')?.value) {
            window.alert("Enter valid password");
          }
        }, error => {
          window.alert(error.error.statusText);
        })
      }, error => {
        window.alert(error.error.statusText);
      })
  }

  get userId() {
    return this.TeacherLogin.get('userId');
  }
  get password() {
    return this.TeacherLogin.get('password');
  }
}
