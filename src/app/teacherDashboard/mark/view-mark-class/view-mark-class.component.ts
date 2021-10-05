import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassRoom } from 'src/app/model/class-room';
import { Mark } from 'src/app/model/mark';
import { Response } from 'src/app/model/response';
import { Student } from 'src/app/model/student';
import { ClassService } from 'src/app/service/class.service';
import { MarkService } from 'src/app/service/mark.service';
import { StudentService } from 'src/app/service/student.service';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { SubjectService } from 'src/app/service/subject.service';
import { TeacherAssignService } from 'src/app/service/teacher-assign.service';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-view-mark-class',
  templateUrl: './view-mark-class.component.html',
  styleUrls: ['./view-mark-class.component.css']
})
export class ViewMarkClassComponent implements OnInit {

  ViewStudentsMarkForm = new FormGroup({
    classes:new FormControl(''),
    code:new FormControl('')
  })

  subjectAssignIdList: number[] = [];
  classList: ClassRoom[] = [];
  subjectList: string[] = [];
  roomNo: number = 0;
  studentList: Student[] = [];
  markList:Mark[]=[];
  length:number=0;
  studentEntity:Student=new Student();
  rollNoList:number[]=[];
  marks:number[]=[];
  nameList:string[]=[];
  term1List:number[]=[];
  term2List:number[]=[];
  term3List:number[]=[];
  
  constructor(private subjectService:SubjectService,private markService:MarkService,private studentService:StudentService,private classRoomService:ClassService,private teacherAssignService:TeacherAssignService,private subjectAssignService:SubjectAssignService) { }

  teacherId: number = Number(localStorage.getItem('user'));

  ngOnInit(): void {

    this.teacherAssignService.getSubjectClassAssignId(this.teacherId).subscribe(data => {
      let response: Response = data;
      this.subjectAssignIdList = response.data;
      for (let i = 0; i < this.subjectAssignIdList.length; i++) {
        this.subjectAssignService.getRoomNoForId(this.subjectAssignIdList[i]).subscribe(data => {
          let response: Response = data;
          let roomNo: number = response.data;
          this.classRoomService.getClass(roomNo).subscribe(data => {
            let response: Response = data;
            this.classList.push(response.data);
          }, error => {
            window.alert(error.error.statusText);
          })
        }, error => {
          window.alert(error.error.statusText);
        })
      }
    }, error => {
      window.alert(error.error.statusText);
    })
    this.classList=[];
  }

  getSubjects()
  {
    let classes: string = this.ViewStudentsMarkForm.get('classes')?.value;
    let classesList: string[] = classes.split('-');
    this.classRoomService.getRoomNo(classesList[0], classesList[1]).subscribe(data => {
      let response: Response = data;
      this.roomNo = response.data;
      for (let i = 0; i < this.subjectAssignIdList.length; i++) {
        this.subjectAssignService.getSubjectCode(this.roomNo, this.subjectAssignIdList[i]).subscribe(data => {
          let response: Response = data;
          let subjectCode: string = response.data;
          if (subjectCode != null) {
            this.subjectList.push(subjectCode);
          }
        }, error => {
          window.alert(error.error.statusText);
        })
        this.subjectList = [];
      }
      
    }, error => {
      window.alert(error.error.statusText);
    })

  }
  getStudentsMark() {
     
    console.log(this.ViewStudentsMarkForm.get('code')?.value);
    this.markService.getAllStudentMark(this.roomNo).subscribe(data => {
      let response: Response = data;
      this.markList = response.data;
      console.log(this.markList);
      this.length = this.markList.length;
      console.log(this.markList)
      this.studentList=[];
      for(let i=0;i<this.markList.length;i=i+3)
      {
        this.studentList.push(Object(this.markList[i].studentEntity));
      }
      let index=0;
      for (let i = 0; i < this.markList.length; i++) {
        this.subjectService.getSubjectName(this.ViewStudentsMarkForm.get('code')?.value).subscribe(data => {
          let response: Response = data;
          let subject: Subject = response.data;
          switch (subject.name) {
            case 'Tamil':
              {
                this.marks.push(Number(this.markList[index].tamil));
                index++;
                break;
              }
            case 'English':
              {
                this.marks.push(Number(this.markList[index].english));
                index++;
                break;
              }
            case 'Maths':
              {
                console.log(index);
                this.marks.push(Number(this.markList[index].maths));
                console.log(this.marks);
                index++;
                break;
              }
            case 'Science':
              {
                this.marks.push(Number(this.markList[index].science));
                index++;
                break;
              }
            case 'SocialScience':
              {
                this.marks.push(Number(this.markList[index].socialScience));
                index++;
                break;
              }
            }

           this.getMarks(this.markList.length);
            
        }, error => {
          window.alert(error.error.statusText);
        }
        )
        
      }
      
      this.marks = [];
      index=0;
      
    }, error => {
      window.alert(error.error.statusText);
    })
  }

  getMarks(length:number)
  {
    this.term1List=[];
    this.term2List=[];
    this.term3List=[];
    console.log(length);
    console.log(this.marks.length);
    for(let i=0;i<length;i=i+3)
    {
        this.term1List.push(this.marks[i]);
        this.term2List.push(this.marks[i+1]);
        this.term3List.push(this.marks[i+2]);
    }
  }
}
