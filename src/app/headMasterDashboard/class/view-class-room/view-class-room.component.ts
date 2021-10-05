import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassRoom } from 'src/app/model/class-room';
import { ClassService } from 'src/app/service/class.service';
import { Response } from 'src/app/model/response';
import { MatDialogConfig ,MatDialog} from '@angular/material/dialog';
import { UpdateClassRoomComponent } from '../update-class-room/update-class-room.component';

@Component({
  selector: 'app-view-class-room',
  templateUrl: './view-class-room.component.html',
  styleUrls: ['./view-class-room.component.css']
})
export class ViewClassRoomComponent implements OnInit {

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
  updateDetails(classDetail:ClassRoom)
  {
    localStorage.setItem('class',JSON.stringify(classDetail));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateClassRoomComponent,dialogConfig);
  }
  
  back()
  {
    this.router.navigate(['headmastermodule']);
  }
}
