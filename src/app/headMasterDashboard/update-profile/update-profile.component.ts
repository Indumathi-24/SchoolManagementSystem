import { Component, OnInit } from '@angular/core';
import { HeadMasterSignUpService } from 'src/app/service/head-master-sign-up.service';
import { Response } from 'src/app/model/response';
import { HeadMaster } from 'src/app/model/head-master';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  headMasterDetail:HeadMaster=new HeadMaster();
  constructor(public dialogRef:MatDialogRef<UpdateProfileComponent>,private headMasterSignUpService:HeadMasterSignUpService) { }

  loginId = localStorage.getItem('user');
  ngOnInit(): void {
    this.headMasterSignUpService.getDetails(Number(this.loginId)).subscribe(data=>{
      let response:Response = data;
      this.headMasterDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }

  updatePersonalDetails()
  {
      this.headMasterSignUpService.updateDetails(Number(this.loginId),this.headMasterDetail).subscribe(data=>{
        let response:Response = data;
        window.alert(response.statusText);
      },error=>{
        window.alert(error.error.statusText);
      })
      this.dialogRef.close();
  }

}
