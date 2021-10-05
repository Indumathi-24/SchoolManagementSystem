import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadMaster } from 'src/app/model/head-master';
import { HeadMasterSignUpService } from 'src/app/service/head-master-sign-up.service';
import { Response } from 'src/app/model/response';
@Component({
  selector: 'app-head-master-sign-up',
  templateUrl: './head-master-sign-up.component.html',
  styleUrls: ['./head-master-sign-up.component.css']
})
export class HeadMasterSignUpComponent implements OnInit {
  HeadMasterSignUpForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    dateOfBirth:new FormControl(''),
    gender:new FormControl(''),
    qualification:new FormControl(''),
    email:new FormControl('',[Validators.email,Validators.required]),
    contactNo:new FormControl('',[Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.required]),
    address:new FormControl('')
  });
  
  constructor(private headMasterSignUpService:HeadMasterSignUpService,private router:Router) { }
  saveHeadMasterSignUp()
  {
    const headMaster:HeadMaster=new HeadMaster();
    headMaster.id=this.HeadMasterSignUpForm.get('id')?.value;
    headMaster.name=this.HeadMasterSignUpForm.get('name')?.value;
    headMaster.dateOfBirth=this.HeadMasterSignUpForm.get('dateOfBirth')?.value;
    headMaster.gender=this.HeadMasterSignUpForm.get('gender')?.value;
    headMaster.qualification=this.HeadMasterSignUpForm.get('qualification')?.value;
    headMaster.email=this.HeadMasterSignUpForm.get('email')?.value;
    headMaster.contactNo=this.HeadMasterSignUpForm.get('contactNo')?.value;
    headMaster.address=this.HeadMasterSignUpForm.get('address')?.value;
    this.headMasterSignUpService.saveDetails(headMaster).subscribe(data=>{
        let response:Response = data;
        window.alert(response.statusText);
    },error=>{
      window.alert(error.error.statusText);
    });
    this.router.navigate(['headmastercredentials']);
  }
 
  get name() { return this.HeadMasterSignUpForm.get('name'); }

  get id() { return this.HeadMasterSignUpForm.get('id'); }

  get email() { return this.HeadMasterSignUpForm.get('email'); }

  get contactNo() { return this.HeadMasterSignUpForm.get('contactNo'); }
  
  ngOnInit(): void {
    
  }

}
