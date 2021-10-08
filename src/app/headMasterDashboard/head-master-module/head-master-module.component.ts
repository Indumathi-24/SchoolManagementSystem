import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadMaster } from 'src/app/model/head-master';
import { HeadMasterSignUpService } from 'src/app/service/head-master-sign-up.service';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-head-master-module',
  templateUrl: './head-master-module.component.html',
  styleUrls: ['./head-master-module.component.css']
})
export class HeadMasterModuleComponent implements OnInit {

  constructor(private router:Router,private headMasterSignUpService:HeadMasterSignUpService) { }

  headMasterDetail:HeadMaster = new HeadMaster();
  loginId = localStorage.getItem('user');
  ngOnInit(): void {
    this.headMasterSignUpService.getDetails(Number(this.loginId)).subscribe(data=>{
      let response:Response = data;
      this.headMasterDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }

  back()
  {
     this.router.navigate(['headmasterlogin']);
  }
}
