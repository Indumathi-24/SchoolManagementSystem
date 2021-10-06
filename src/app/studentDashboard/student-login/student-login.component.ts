import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentLogin } from 'src/app/model/student-login';
import { StudentLoginService } from 'src/app/service/student-login.service';
import { Response } from 'src/app/model/response';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';

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



  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.studentService.getParticularStudent(this.StudentLogin.get('userId')?.value)
      .subscribe(data => {
        let response: Response = data;
        let studentDetail: Student = new Student();
        studentDetail = response.data;
          if (studentDetail.rollNo == this.StudentLogin.get('userId')?.value && studentDetail.password == this.StudentLogin.get('password')?.value) {
            window.alert("Logged in Successfully");
            localStorage.setItem("user", String(studentDetail.rollNo))
            this.router.navigate(['studentmodule']);
          }

          if (studentDetail.rollNo != this.StudentLogin.get('userId')?.value && studentDetail.password != this.StudentLogin.get('password')?.value) {
            window.alert("Enter valid user or password");
          }

          if (studentDetail.password != this.StudentLogin.get('password')?.value) {
            window.alert("Enter valid password");
          }
        })
      }


  get userId() {
    return this.StudentLogin.get('userId');
  }
  get password() {
    return this.StudentLogin.get('password');
  }
}
