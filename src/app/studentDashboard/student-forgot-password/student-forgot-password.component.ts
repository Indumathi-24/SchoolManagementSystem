import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentLogin } from 'src/app/model/student-login';
import { StudentLoginService } from 'src/app/service/student-login.service';
import { Response } from 'src/app/model/response';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-forgot-password',
  templateUrl: './student-forgot-password.component.html',
  styleUrls: ['./student-forgot-password.component.css']
})
export class StudentForgotPasswordComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.studentService.getParticularStudent(this.studentId).subscribe(data=>{
      let response:Response = data;
      this.student = response.data;
      console.log(this.student);
    })
  }
  
  student:Student = new Student();
  studentId:number = Number(localStorage.getItem('user'));
  public password:string='';
  public confirmPassword:string='';

  updateStudentPassword()
  {
    console.log(this.password);
    console.log(this.confirmPassword);
    if(this.password==this.confirmPassword)
    {
      this.student.password=this.password;
      console.log(this.student);
      this.studentService.updateParticularStudent(Number(this.student.classEntity?.roomNo),Number(this.student.rollNo),this.student).subscribe(data=>{
        let response:Response = data;
        window.alert(response.statusText);
      })
    }
  }
}
