import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClassRoom } from 'src/app/model/class-room';
import { ClassService } from 'src/app/service/class.service';
import { Response } from 'src/app/model/response';
import { UpdatePassPercentageComponent } from '../update-pass-percentage/update-pass-percentage.component';

@Component({
  selector: 'app-view-pass-percentage',
  templateUrl: './view-pass-percentage.component.html',
  styleUrls: ['./view-pass-percentage.component.css']
})
export class ViewPassPercentageComponent implements OnInit {

  classList: ClassRoom[] =[];
  classDetail:ClassRoom = new ClassRoom();
  constructor(private dialog: MatDialog,private classRoomService:ClassService,private router:Router) { }

  ngOnInit(): void {
    this.classRoomService.getClassDetails().subscribe(data=>{
      let response:Response=data;
      this.classList = response.data;
     },error=>{
       window.alert(error.error.statusText);
     })
  }
  
  updatePassPercentage(classDetail:ClassRoom)
  {
    localStorage.setItem('class',JSON.stringify(classDetail));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdatePassPercentageComponent,{
      height: '40%',
      width: '40%'
  });
  }

  back()
  {

  }
}
