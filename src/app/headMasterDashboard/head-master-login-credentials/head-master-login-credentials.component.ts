import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadMasterLogin } from 'src/app/model/head-master-login';
import { HeadMasterLoginServiceService } from 'src/app/service/head-master-login-service.service';
import { Response } from 'src/app/model/response';


@Component({
  selector: 'app-head-master-login-credentials',
  templateUrl: './head-master-login-credentials.component.html',
  styleUrls: ['./head-master-login-credentials.component.css']
})
export class HeadMasterLoginCredentialsComponent implements OnInit {
  HeadMasterLoginCredentialsForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required]),
  });


  constructor(private headMasterLoginService: HeadMasterLoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  loginCredentials() {
    let headMasterLogin: HeadMasterLogin = new HeadMasterLogin();
    headMasterLogin.password = this.HeadMasterLoginCredentialsForm.get('password')?.value;
    if (this.HeadMasterLoginCredentialsForm.get('password')?.value == this.HeadMasterLoginCredentialsForm.get('confirmPassword')?.value) {
      this.headMasterLoginService.saveLoginDetails(this.HeadMasterLoginCredentialsForm.get('userId')?.value, headMasterLogin)
        .subscribe(data => {
          let response: Response = data;
          window.alert(response.statusText)
        }, error => {
          window.alert(error.error.statusText);
        })
      this.router.navigate(['headmasterlogin']);
    }

    else {
      window.alert("You entered the password wrongly");
    }
  }
  get userId() {
    return this.HeadMasterLoginCredentialsForm.get('userId');
  }
  get password() {
    return this.HeadMasterLoginCredentialsForm.get('password');
  }
  get confirmPassword() {
    return this.HeadMasterLoginCredentialsForm.get('confirmPassword');
  }
}


