import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentLogin } from 'src/app/model/student-login';
import { StudentLoginService } from 'src/app/service/student-login.service';
import { Response } from 'src/app/model/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  StudentLogin = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })



  constructor(private studentLoginService: StudentLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.studentLoginService.getLoginDetails(this.StudentLogin.get('userId')?.value)
      .subscribe(data => {
        let response: Response = data;
        let studentLoginDetail: StudentLogin = new StudentLogin();
        studentLoginDetail = response.data;
        this.studentLoginService.getParticularId(Number(studentLoginDetail.autoId)).subscribe(data => {
          let response: Response = data;
          let studentLoginId: number = response.data;
          if (studentLoginId == this.StudentLogin.get('userId')?.value && studentLoginDetail.password == this.StudentLogin.get('password')?.value) {
            window.alert("Logged in Successfully");
            localStorage.setItem("user", String(studentLoginId))
            this.router.navigate(['studentmodule']);
          }

          if (studentLoginId != this.StudentLogin.get('userId')?.value && studentLoginDetail.password != this.StudentLogin.get('password')?.value) {
            window.alert("Enter valid user or password");
          }

          if (studentLoginDetail.password != this.StudentLogin.get('password')?.value) {
            window.alert("Enter valid password");
          }
        })
      }, error => {
        window.alert(error.error.statusText);
      })
  }

  get userId() {
    return this.StudentLogin.get('userId');
  }
  get password() {
    return this.StudentLogin.get('password');
  }
}
