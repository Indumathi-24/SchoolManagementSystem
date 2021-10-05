import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeadMasterLogin } from 'src/app/model/head-master-login';
import { HeadMasterLoginServiceService } from 'src/app/service/head-master-login-service.service';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-head-master-login',
  templateUrl: './head-master-login.component.html',
  styleUrls: ['./head-master-login.component.css']
})
export class HeadMasterLoginComponent implements OnInit {
  HeadMasterLogin = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  })

  constructor(private headMasterLoginService: HeadMasterLoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.headMasterLoginService.getLoginDetails(this.HeadMasterLogin.get('userId')?.value)
      .subscribe(data => {
        let response: Response = data;
        let headMasterLoginData: HeadMasterLogin = new HeadMasterLogin();
        headMasterLoginData = response.data;
        this.headMasterLoginService.getParticularId(Number(headMasterLoginData.autoId)).subscribe(data => {
          let response: Response = data;
          let headMasterLoginId: number = response.data;
          if (headMasterLoginId == this.HeadMasterLogin.get('userId')?.value && headMasterLoginData.password == this.HeadMasterLogin.get('password')?.value) {
            window.alert("Logged in Successfully");
            localStorage.setItem("user", String(headMasterLoginId))
            this.router.navigate(['headmastermodule/addclass']);
          }

          if (headMasterLoginId != this.HeadMasterLogin.get('userId')?.value && headMasterLoginData.password != this.HeadMasterLogin.get('password')?.value) {
            window.alert("Enter valid user or password");
          }

          if (headMasterLoginData.password != this.HeadMasterLogin.get('password')?.value) {
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
    return this.HeadMasterLogin.get('userId');
  }
  get password() {
    return this.HeadMasterLogin.get('password');
  }
}
