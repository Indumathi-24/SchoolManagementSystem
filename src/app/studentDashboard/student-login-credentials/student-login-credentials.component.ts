import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentLogin } from 'src/app/model/student-login';
import { StudentLoginService } from 'src/app/service/student-login.service';
import { Response } from 'src/app/model/response';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-login-credentials',
  templateUrl: './student-login-credentials.component.html',
  styleUrls: ['./student-login-credentials.component.css']
})
export class StudentLoginCredentialsComponent implements OnInit {

  StudentLoginCredentialsForm = new FormGroup({
    userId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  
  
  constructor(private studentLoginService:StudentLoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginCredentials()
  {
    const studentLogin:StudentLogin = new StudentLogin();
    studentLogin.password=this.StudentLoginCredentialsForm.get('password')?.value;
    if(this.StudentLoginCredentialsForm.get('password')?.value==this.StudentLoginCredentialsForm.get('confirmPassword')?.value)
    {
      this.studentLoginService.saveLoginDetails(this.StudentLoginCredentialsForm.get('userId')?.value,studentLogin)
      .subscribe(data=>{
        let response:Response=data;
      window.alert(response.statusText)});
     this.router.navigate(['studentlogin']);
    }
    
    else{
      window.alert("You entered the password wrongly");
    }
  }

  get userId()
    {
      return this.StudentLoginCredentialsForm.get('userId');
    }
    get password()
    {
      return this.StudentLoginCredentialsForm.get('password');
    }
    get confirmPassword()
    {
      return this.StudentLoginCredentialsForm.get('confirmPassword');
    }

}
