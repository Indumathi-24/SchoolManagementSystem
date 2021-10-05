import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentLogin } from 'src/app/model/student-login';
import { StudentLoginService } from 'src/app/service/student-login.service';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-student-forgot-password',
  templateUrl: './student-forgot-password.component.html',
  styleUrls: ['./student-forgot-password.component.css']
})
export class StudentForgotPasswordComponent implements OnInit {

  StudentForGotPasswordForm =new FormGroup({
    userId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  
  constructor(private studentLoginService:StudentLoginService,private router:Router) { }

  ngOnInit(): void {
  }
  
  saveStudentForgotPassword()
  {
    let studentLogin:StudentLogin= new StudentLogin();
    studentLogin.password = this.StudentForGotPasswordForm.get('password')?.value;
    if(studentLogin.password == this.StudentForGotPasswordForm.get('confirmPassword')?.value)
    {
     
      this.studentLoginService.updateLoginDetails(this.StudentForGotPasswordForm.get('userId')?.value,studentLogin)
      .subscribe(data=>
        {
            console.log(data)
            let response:Response = data;
            window.alert(response.statusText)},error=>{
              window.alert(error.error.statusText);
            });
            this.router.navigate(['loginforstudent']);
    }
    else
    {
      window.alert("Enter same password and confirmPassword")
    }

  }
    get userId()
    {
      return this.StudentForGotPasswordForm.get('userId');
    }
    get password()
    {
      return this.StudentForGotPasswordForm.get('password');
    }
    get confirmPassword()
    {
      return this.StudentForGotPasswordForm.get('confirmPassword');
    }
}
