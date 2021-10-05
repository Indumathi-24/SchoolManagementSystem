import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadMasterLogin } from 'src/app/model/head-master-login';
import { HeadMasterLoginServiceService } from 'src/app/service/head-master-login-service.service';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
   
  HeadMasterForGotPasswordForm =new FormGroup({
     userId:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required,Validators.minLength(8)]),
     confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  
  constructor(private headMasterLoginService:HeadMasterLoginServiceService,private router:Router) { }

  ngOnInit(): void {

  }
  saveHeadMasterForgotPassword()
  {
    const headMasterLogin: HeadMasterLogin = new HeadMasterLogin();
    headMasterLogin.password = this.HeadMasterForGotPasswordForm.get('password')?.value;
    if(headMasterLogin.password == this.HeadMasterForGotPasswordForm.get('confirmPassword')?.value)
    {
     
      this.headMasterLoginService.updateLoginDetails(this.HeadMasterForGotPasswordForm.get('userId')?.value,headMasterLogin)
      .subscribe(data=>
        {
            let response:Response = data;
            window.alert(response.statusText);
          },error=>{
              window.alert(error.error.statusText);
            });
            this.router.navigate(['headMasterLogin']);  
    }
    else
    {
      window.alert("Enter same password and confirmPassword")
    }

  }
    get userId()
    {
      return this.HeadMasterForGotPasswordForm.get('userId');
    }
    get password()
    {
      return this.HeadMasterForGotPasswordForm.get('password');
    }
    get confirmPassword()
    {
      return this.HeadMasterForGotPasswordForm.get('confirmPassword');
    }
}
