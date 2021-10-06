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
   
  
  loginId = Number(localStorage.getItem('user'));
  password:string='';
  confirmPassword:string='';
  headMasterLoginData: HeadMasterLogin = new HeadMasterLogin();
  headMasterLogin: HeadMasterLogin = new HeadMasterLogin();
  constructor(private headMasterLoginService:HeadMasterLoginServiceService,private router:Router) { }

  ngOnInit(): void {
    this.headMasterLoginService.getLoginDetails(this.loginId)
      .subscribe(data => {
        let response: Response = data;
        this.headMasterLoginData = response.data;
        })

  }
  updateHeadMasterPassword()
  {
    this.headMasterLoginData.password = this.password;
    if(this.headMasterLoginData.password == this.confirmPassword)
    {
     
      this.headMasterLoginService.updateLoginDetails(this.loginId,this.headMasterLoginData)
      .subscribe(data=>
        {
            let response:Response = data;
            this.headMasterLogin = response.data;
            window.alert(response.statusText);
          },error=>{
              window.alert(error.error.statusText);
          });

        if(this.headMasterLogin!=null)
        {
            this.router.navigate(['headmastermodule']);
        }  
    }
    else
    {
      window.alert("Enter same password and confirmPassword")
    }

  }
}
