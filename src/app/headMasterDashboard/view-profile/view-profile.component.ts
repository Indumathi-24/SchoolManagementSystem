import { Component, OnInit } from '@angular/core';
import { HeadMaster } from 'src/app/model/head-master';
import { HeadMasterSignUpService } from 'src/app/service/head-master-sign-up.service';
import { Response} from 'src/app/model/response';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  headMasterDetail:HeadMaster = new HeadMaster();
  constructor(private dialog:MatDialog,private headMasterSignUpService:HeadMasterSignUpService) { }
  
  loginId = localStorage.getItem('user');
  ngOnInit(): void {
     this.headMasterSignUpService.getDetails(Number(this.loginId)).subscribe(data=>{
       let response:Response = data;
       this.headMasterDetail = response.data;
     },error=>{
       window.alert(error.error.statusText);
     })
  }

  update()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateProfileComponent,{
      height: '90%',
      width: '60%'
  });
  }

}
