import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassRoom } from 'src/app/model/class-room';
import { ClassService } from 'src/app/service/class.service';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-add-class-room',
  templateUrl: './add-class-room.component.html',
  styleUrls: ['./add-class-room.component.css']
})
export class AddClassRoomComponent implements OnInit {
 ClassRoomForm=new FormGroup({
    roomNo:new FormControl(''),
    standard:new FormControl(''),
    section:new FormControl(''),
    passPercentage:new FormControl('')})

  standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  sectionList:string[]=['A','B','C','D','E'];
  constructor(private classRoomService:ClassService,private router:Router) { }
  
  ngOnInit(): void {

  }
  saveClassDetails()
  {
   const classDetail:ClassRoom = new ClassRoom();
   classDetail.roomNo=this.ClassRoomForm.get('roomNo')?.value;
   classDetail.standard=this.ClassRoomForm.get('standard')?.value;
   classDetail.section=this.ClassRoomForm.get('section')?.value;
   classDetail.passPercentage = this.ClassRoomForm.get('passPercentage')?.value;
   this.classRoomService.saveClassRoomDetails(classDetail).subscribe( data=>{
    let response:Response = data;
    window.alert(response.statusText);
    } ,error =>{window.alert(error.error.statusText)});
  }
 
  back()
  {
    this.router.navigate(["headmastermodule"]);
  }
 
  
}
