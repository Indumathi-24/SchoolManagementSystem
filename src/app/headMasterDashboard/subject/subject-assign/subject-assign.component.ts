import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassRoom } from 'src/app/model/class-room';
import { Subject } from 'src/app/model/subject';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { Response} from 'src/app/model/response';
import { ClassService } from 'src/app/service/class.service';
import { SubjectService } from 'src/app/service/subject.service';
import { SubjectClass } from 'src/app/model/subject-class';

@Component({
  selector: 'app-subject-assign',
  templateUrl: './subject-assign.component.html',
  styleUrls: ['./subject-assign.component.css']
})
export class SubjectAssignComponent implements OnInit {

  AssignSubjectClassForm = new FormGroup({
    standard:new FormControl(''),
    section:new FormControl(''),
    code:new FormControl('')
  })

  standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  sectionList:string[]=['A','B','C','D','E'];
  subjectList:Subject[]=[];
  roomNo:number=0;
  subjectCodeList:string[]=[];
  constructor(private subjectService:SubjectService,private classRoomService:ClassService,private subjectAssignService:SubjectAssignService) { }

  ngOnInit(): void {
  }

  getRoomNo()
  {
    this.classRoomService.getRoomNo(this.AssignSubjectClassForm.get('standard')?.value,this.AssignSubjectClassForm.get('section')?.value).subscribe(data=>{
      let response:Response = data;
      this.roomNo = response.data;
    })
  }

  getSubject()
  {
    this.subjectService.getSubjects().subscribe(data=>{
      let response:Response = data;
      this.subjectList = response.data;
    },error=>{
      window.alert(error.error.statusText);
    }
    )
  }
  saveSubjectClass()
  {
    let classDetail:ClassRoom = new ClassRoom();
    classDetail.roomNo =this.roomNo;
    let subjectDetail:Subject = new Subject();
    let subjectCode:string = this.AssignSubjectClassForm.get('code')?.value;
    let subjectCodeList:string[];
    subjectCodeList = subjectCode.split('-');
    subjectDetail.code = subjectCodeList[0];
    const subjectClass:SubjectClass = new SubjectClass();
    subjectClass.classDetail = classDetail;
    subjectClass.subject = subjectDetail;
    this.subjectAssignService.viewSubjectClass(this.roomNo).subscribe(data=>{
      let response:Response = data;
      this.subjectCodeList= response.data;
      if(this.subjectCodeList.length<5)
      {
        console.log(this.subjectCodeList.length);
        this.subjectAssignService.assignSubjectClass(subjectClass).subscribe(data=>
        {
          let response:Response = data;
          window.alert(response.statusText);
          this.AssignSubjectClassForm.reset();
        },
        error=>{
          window.alert(error.error.message);
        })
      }
      else{
        window.alert("Subjects are already assigned to this class");
      }
    })
   
  }
}
