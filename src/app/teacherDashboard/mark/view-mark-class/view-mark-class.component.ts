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
  marks:number[] | any =[];
  nameList:string[]=[];
  term1List:number[]=[];
  term2List:number[]=[];
  term3List:number[]=[];
  roomNoList:number[]=[];
  
  constructor(private subjectService:SubjectService,private markService:MarkService,private studentService:StudentService,private classService:ClassService,private teacherAssignService:TeacherAssignService,private subjectAssignService:SubjectAssignService) { }

  teacherId: number = Number(localStorage.getItem('user'));

  ngOnInit(): void {

    this.teacherAssignService.getSubjectClassAssignId(this.teacherId).subscribe(data => {
      let response: Response = data;
      this.subjectAssignIdList = response.data;
      console.log(this.subjectAssignIdList);
    this.subjectAssignService.getRoomNoList(this.subjectAssignIdList).subscribe(data=>{
      let response: Response = data;
      this.roomNoList = response.data;
      console.log(this.roomNoList);
    
    this.classService.getClassList(this.roomNoList).subscribe(data=>{
      let response: Response = data;
      this.classList = response.data;
      console.log(this.classList);
    }, error => {
      window.alert(error.error.statusText);
    })
    }, error => {
      window.alert(error.error.statusText);
    })
  }, error => {
    window.alert(error.error.statusText);
  })
  }

  getSubjects()
  {
    let classes: string = this.ViewStudentsMarkForm.get('classes')?.value;
    let classesList: string[] = classes.split('-');
    this.classService.getRoomNo(classesList[0], classesList[1]).subscribe(data => {
      let response: Response = data;
      this.roomNo = response.data;
    this.subjectAssignService.getSubjectCodeList(this.roomNo,this.subjectAssignIdList).subscribe(data=>{
      let response: Response = data;
      this.subjectList = response.data;
      }, error => {
        window.alert(error.error.statusText);
      })
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
      for(let i=0;i<(this.markList.length)/3;i++)
      {
        this.studentList.push(Object(this.markList[i].studentEntity));
        console.log(this.studentList);
      }
      let index=0;
      this.subjectService.getSubjectName(this.ViewStudentsMarkForm.get('code')?.value).subscribe(data => {
        let response: Response = data;
        let subject: Subject = response.data;
      for (let i = 0; i < this.markList.length; i++) {
        switch (subject.name) {
            case 'Tamil':
              {
                console.log(i);
                console.log(index);
                this.marks.push(Number(this.markList[i].tamil));
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
            for(let i=0;i<this.marks.length;i++)
           {
              if(this.marks[i]==-1)
              {
                this.marks[i]='NE';
              }
           }
           this.getMarks(this.markList.length);
      }  
        }, error => {
          window.alert(error.error.statusText);
        })
      
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
    console.log(this.marks);
    console.log(this.marks.length);
    let  noOfStudents:number =(length)/3;
    let count:number=0;
    for(let i=0;i<length;i++)
    {
      if(i<noOfStudents)
      {
      this.term1List.push(this.marks[i]);
      count++;
      }
      else if(i<(2*(noOfStudents)))
      {
        this.term2List.push(this.marks[i]);
      }
      else
      {
        this.term3List.push(this.marks[i]);
      }
    }
    console.log(this.term1List);
    console.log(this.term2List)
    console.log(this.term3List)
  }
}
