import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { Response } from 'src/app/model/response';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { TeacherAssignService } from 'src/app/service/teacher-assign.service';
import { MarkService } from 'src/app/service/mark.service';
import { Mark } from 'src/app/model/mark';
import { SubjectService } from 'src/app/service/subject.service';
import { Subject } from 'src/app/model/subject';
import { ClassRoom } from 'src/app/model/class-room';

@Component({
  selector: 'app-view-mark',
  templateUrl: './view-mark.component.html',
  styleUrls: ['./view-mark.component.css']
})
export class ViewMarkComponent implements OnInit {

  ViewMarkForm = new FormGroup({
    classes: new FormControl(''),
    rollNo: new FormControl(''),
    code: new FormControl('')
  })

  standardList: string[] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  sectionList: string[] = ['A', 'B', 'C', 'D', 'E'];
  roomNo: number = 0;
  studentList: Student[] = [];
  subjectAssignIdList: number[] = [];
  subjectList: string[] = [];
  markList: Mark[] = [];
  marks: number[] = [];
  length: number = 0;
  classList: ClassRoom[] = [];
  rollNo: number = 0;
  studentDetail: Student = new Student();
  roomNoList:number[]=[];

  constructor(private subjectService: SubjectService, private markService: MarkService, private classService: ClassService, private studentService: StudentService, private subjectAssignService: SubjectAssignService, private teacherAssignService: TeacherAssignService) { }

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
    let classes: string = this.ViewMarkForm.get('classes')?.value;
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
      this.getStudents();
    }, error => {
      window.alert(error.error.statusText);
    })
  }
  getStudents() {
    this.studentService.getAllStudent(this.roomNo).subscribe(data => {
      let response: Response = data;
      this.studentList = response.data;
    }, error => {
      window.alert(error.error.statusText);
    })

  }
  getStudentsMarks() {
    this.rollNo = this.ViewMarkForm.get('rollNo')?.value;
    this.studentService.getParticularStudent(this.rollNo).subscribe(data => {
      let response: Response = data;
      this.studentDetail = response.data;
    }, error => {
      window.alert(error.error.statusText);
    })
    this.markService.getParticularSubjectMark(this.ViewMarkForm.get('rollNo')?.value).subscribe(data => {
      let response: Response = data;
      this.markList = response.data;
      console.log(this.markList);
      this.length = this.markList.length;
      this.subjectService.getSubjectName(this.ViewMarkForm.get('code')?.value).subscribe(data => {
        let response: Response = data;
        let subject: Subject = response.data;
      for (let i = 0; i < this.markList.length; i++) {
          switch (subject.name) {
            case 'Tamil':
              {
                this.marks.push(Number(this.markList[i].tamil));
                break;
              }
            case 'English':
              {
                this.marks.push(Number(this.markList[i].english));
                break;
              }
            case 'Maths':
              {
                this.marks.push(Number(this.markList[i].maths));
                break;
              }
            case 'Science':
              {
                this.marks.push(Number(this.markList[i].science));
                break;
              }
            case 'SocialScience':
              {
                this.marks.push(Number(this.markList[i].socialScience));
                break;
              }
          }
        }
          console.log(this.marks);
        }, error => {
          window.alert(error.error.statusText);
        })
      this.marks = [];
    }, error => {
      window.alert(error.error.statusText);
    })
  }
}
