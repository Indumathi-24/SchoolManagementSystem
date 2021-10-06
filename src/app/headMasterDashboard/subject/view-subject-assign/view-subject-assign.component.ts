import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassService } from 'src/app/service/class.service';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { Response} from 'src/app/model/response';
import { SubjectService } from 'src/app/service/subject.service';
import { Subject } from 'src/app/model/subject';
import { SubjectClass } from 'src/app/model/subject-class';

@Component({
  selector: 'app-view-subject-assign',
  templateUrl: './view-subject-assign.component.html',
  styleUrls: ['./view-subject-assign.component.css']
})
export class ViewSubjectAssignComponent implements OnInit {

    ViewSubjectClassForm = new FormGroup({
      standard:new FormControl(''),
      section:new FormControl('')
    })
  standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  sectionList:string[]=['A','B','C','D','E'];
  subjectCodeList:string[]=[];
  roomNo:number = 0;
  length:number =0;
  subjectList:Subject[]=[];
  subject:Subject= new Subject();
  constructor(private subjectService:SubjectService,private classRoomService:ClassService,private subjectAssignService:SubjectAssignService) { }

  ngOnInit(): void {
  }

  getRoomNo()
  {
    this.classRoomService.getRoomNo(this.ViewSubjectClassForm.get('standard')?.value,this.ViewSubjectClassForm.get('section')?.value).subscribe(data=>{
      let response:Response = data;
      this.roomNo = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }

  getSubjectClass()
  {
    this.subjectAssignService.viewSubjectClass(this.roomNo).subscribe(data=>
      {
        let response:Response = data;
        this.subjectCodeList = response.data;
        this.length = this.subjectCodeList.length;
      this.subjectService.getSubjectList(this.subjectCodeList).subscribe(data=>{
        let response:Response = data;
        this.subjectList = response.data;
      },error=>{
        window.alert(error.error.statusText);
      })

      // for(let i=0;i<this.subjectCodeList.length;i++)
      // {
      //   this.subjectService.getSubjectName(String(this.subjectCodeList[i])).subscribe(data=>{
      //     let response:Response = data;
      //     this.subject = response.data;
      //     this.subjectList.push(this.subject);
      //   },error=>{
      //     window.alert(error.error.statusText);
      //   })
      // }
      },error=>{
        window.alert(error.error.statusText);
      })
      this.subjectList=[];
    }
}
