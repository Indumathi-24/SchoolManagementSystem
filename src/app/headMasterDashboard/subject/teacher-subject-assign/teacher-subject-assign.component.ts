import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import { SubjectService } from 'src/app/service/subject.service';
import{ Response} from 'src/app/model/response';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { Subject } from 'src/app/model/subject';
import { TeacherSubject } from 'src/app/model/teacher-subject';
import { TeacherSignUpService } from 'src/app/service/teacher-sign-up.service';
import { Teacher } from 'src/app/model/teacher';
import { TeacherAssignService } from 'src/app/service/teacher-assign.service';
import { SubjectClass } from 'src/app/model/subject-class';
@Component({
  selector: 'app-teacher-subject-assign',
  templateUrl: './teacher-subject-assign.component.html',
  styleUrls: ['./teacher-subject-assign.component.css']
})
export class TeacherSubjectAssignComponent implements OnInit {

  TeacherSubjectForm = new FormGroup({
    standard:new FormControl(''),
    section:new FormControl(''),
    subjectCode:new FormControl(''),
    teacherId:new FormControl('')
  })

  standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  sectionList:string[]=['A','B','C','D','E'];
  roomNo:number =0;
  subjectList:Subject[]=[];
  subject:Subject= new Subject();
  subjectCodeList:string[]=[];
  subjectClassAssignId:number=0;
  teacherList:Teacher[]=[];
  constructor(private teacherAssignService:TeacherAssignService,private teacherService:TeacherSignUpService,private subjectAssignService:SubjectAssignService,private subjectService:SubjectService,private classRoomService:ClassService) { }

  ngOnInit(): void {
  }
   
  getRoomNo()
  {
    this.classRoomService.getRoomNo(this.TeacherSubjectForm.get('standard')?.value,this.TeacherSubjectForm.get('section')?.value).subscribe(data=>{
      let response:Response = data;
      this.roomNo = response.data;
      this.getSubjectClass();
      this.getTeacherDetails();
    },error=>{window.alert(error.error.message)})
    
  }

  getSubjectClass()
  {
    this.subjectAssignService.viewSubjectClass(this.roomNo).subscribe(data=>
      {
        let response:Response = data;
        this.subjectCodeList = response.data;
      for(let i=0;i<this.subjectCodeList.length;i++)
      {
        this.subjectService.getSubjectName(String(this.subjectCodeList[i])).subscribe(data=>{
          let response:Response = data;
          this.subject = response.data;
          this.subjectList.push(this.subject);
          console.log(this.subject);
        },error=>{
          window.alert(error.error.statusText);
        })
      }
      })
      this.subjectList=[];
    }
     
    getTeacherDetails()
    {
      this.teacherService.getAllDetails().subscribe(data=>{
        let response:Response =data;
        this.teacherList = response.data;
      })
    }
    saveTeacherSubject()
    {
      let subjectCode:string = this.TeacherSubjectForm.get('subjectCode')?.value;
      let subjectCodeList:string[];
      subjectCodeList = subjectCode.split('-');
        this.subjectAssignService.getSubjectAssignId(subjectCodeList[0],this.roomNo).subscribe(data=>
          {
            let response:Response = data;
            this.subjectClassAssignId =response.data;
          const teacherSubjectDetail:TeacherSubject = new TeacherSubject();
          const subjectClassDetail:SubjectClass= new SubjectClass();
          const teacherDetail:Teacher=new Teacher();
          subjectClassDetail.id = this.subjectClassAssignId;
          teacherSubjectDetail.subjectClassDetail = subjectClassDetail;
          let teacherId:string = this.TeacherSubjectForm.get('teacherId')?.value;
          let teacherIdList:string[];
          teacherIdList = teacherId.split('-');
          teacherDetail.id = Number(teacherIdList[0]);
          teacherSubjectDetail.teacherDetail= teacherDetail;
          this.teacherAssignService.assignTeacherSubject(teacherSubjectDetail).subscribe(data=>{
            let response:Response = data;
            window.alert(response.statusText);
          },
          
          error=>{
            window.alert(error.error.statusText);
          })
        },error=>{
          window.alert(error.error.statusText);
        })
    }
}
