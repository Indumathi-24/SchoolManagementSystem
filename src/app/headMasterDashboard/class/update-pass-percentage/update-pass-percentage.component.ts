import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import { Response } from 'src/app/model/response';
import { ClassRoom } from 'src/app/model/class-room';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-pass-percentage',
  templateUrl: './update-pass-percentage.component.html',
  styleUrls: ['./update-pass-percentage.component.css']
})
export class UpdatePassPercentageComponent implements OnInit {

  classRoom: string | any = localStorage.getItem('class');
  classDetail: ClassRoom = JSON.parse(this.classRoom);
  constructor(public dialogRef: MatDialogRef<UpdatePassPercentageComponent>,private classRoomService:ClassService) { }

  ngOnInit(): void {
    this.classRoomService.getParticularClassDetails(Number(this.classDetail.roomNo)).subscribe(data => {
      let response: Response = data;
      this.classDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    });
  }
  
  updatePassPercentageDetails()
  {
    if(Number(this.classDetail.passPercentage)<100)
    {
    this.classRoomService.updatePassPercentage(Number(this.classDetail.roomNo),Number(this.classDetail.passPercentage),this.classDetail).subscribe(data=>{
      let response: Response = data;
      window.alert(response.statusText);
      this.dialogRef.close();
    })
    }
   else
    {
      window.alert("Pass Percentage should be less than 100!");
    }
  }
  
}
