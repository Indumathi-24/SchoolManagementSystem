import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassRoom } from 'src/app/model/class-room';
import { ClassService } from 'src/app/service/class.service';
import { Response } from 'src/app/model/response';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-class-room',
  templateUrl: './update-class-room.component.html',
  styleUrls: ['./update-class-room.component.css']
})
export class UpdateClassRoomComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<UpdateClassRoomComponent>, private classRoomService: ClassService, private route: ActivatedRoute, private router: Router) { }

  classRoom: string | any = localStorage.getItem('class');
  classDetail: ClassRoom = JSON.parse(this.classRoom);

  ngOnInit(): void {
    this.classRoomService.getParticularClassDetails(Number(this.classDetail.roomNo)).subscribe(data => {
      let response: Response = data;
      this.classDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    });
  }

  updateClassDetails() {
    this.classRoomService.updateClassRoomDetails(Number(this.classDetail.roomNo), this.classDetail).subscribe(data => {
      let response: Response = data;
      window.alert(response.statusText);
    },error=>{
      window.alert(error.error.statusText);
    });
    this.dialogRef.close();
  }

 
}
