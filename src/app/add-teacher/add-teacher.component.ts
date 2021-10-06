import { Component, OnInit } from '@angular/core';
import { TeacherAssignService } from '../service/teacher-assign.service';
import { Response } from '../model/response';
import { SubjectAssignService } from '../service/subject-assign.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassRoom } from '../model/class-room';
import { Student } from '../model/student';
import { ClassService } from '../service/class.service';
import { StudentService } from '../service/student.service';
import { MarkService } from '../service/mark.service';
import { Mark } from '../model/mark';
import { SubjectService } from '../service/subject.service';
import { Subject } from '../model/subject';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  // AddMarkForm = new FormGroup({
  //   classes: new FormControl(''),
  //   subjectCode: new FormControl(''),
  //   teacherId: new FormControl(''),
  //   rollNo: new FormControl(''),
  //   mark: new FormControl(''),
  //   termType: new FormControl('')
  // })

  ViewMarkForm = new FormGroup({
    classes: new FormControl(''),
    rollNo: new FormControl(''),
    code: new FormControl('')
  })

  constructor(private studentService:StudentService,private markService:MarkService,private subjectService:SubjectService,private classService:ClassService,private teacherAssignService:TeacherAssignService,private subjectAssignService:SubjectAssignService) { }

  teacherId: number = Number(localStorage.getItem('user'));
  subjectAssignIdList:number[]=[];
  roomNoList:number[]=[];
  termList: string[] = ['I', 'II', 'III'];
  roomNo: number = 0;
  studentList: Student[] = [];
  subjectList: string[] = [];
  classList: ClassRoom[] = [];
  markList: Mark[] = [];
  marks: number[] = [];
  length:number=0;
  rollNo: number = 0;
  studentDetail: Student = new Student();
  
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
    })
    })
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
      })
      this.getStudents();
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


  // saveMark() {
  //   const markDetail: Mark = new Mark();
  //   this.subjectService.getSubjectName(this.AddMarkForm.get('subjectCode')?.value).subscribe(data => {
  //     let response: Response = data;
  //     let subject: Subject = response.data;
  //     switch (subject.name) {
  //       case 'Tamil':
  //         {
  //           markDetail.tamil = this.AddMarkForm.get('mark')?.value;
  //           markDetail.termType = this.AddMarkForm.get('termType')?.value;
  //           this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
  //             let response: Response = data;
  //             window.alert(response.statusText);
  //           }, error => {
  //             window.alert(error.error.statusText);
  //           })
  //           break;
  //         }
  //       case 'English':
  //         {
  //           markDetail.english = this.AddMarkForm.get('mark')?.value;
  //           markDetail.termType = this.AddMarkForm.get('termType')?.value;
  //           this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
  //             let response: Response = data;
  //             window.alert(response.statusText);
  //           }, error => {
  //             window.alert(error.error.statusText);
  //           })
  //           break;
  //         }
  //       case 'Maths':
  //         {
  //           markDetail.maths = this.AddMarkForm.get('mark')?.value;
  //           markDetail.termType = this.AddMarkForm.get('termType')?.value;
  //           this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
  //             let response: Response = data;
  //             window.alert(response.statusText);

  //           }, error => {
  //             window.alert(error.error.statusText);
  //           })
  //           break;
  //         }

  //       case 'Science':
  //         {
  //           markDetail.science = this.AddMarkForm.get('mark')?.value;
  //           markDetail.termType = this.AddMarkForm.get('termType')?.value;
  //           this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
  //             let response: Response = data;
  //             window.alert(response.statusText);
  //           }, error => {
  //             window.alert(error.error.statusText);
  //           })
  //           break;
  //         }

  //       case 'SocialScience':
  //         {
  //           markDetail.socialScience = this.AddMarkForm.get('mark')?.value;
  //           markDetail.termType = this.AddMarkForm.get('termType')?.value;
  //           this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
  //             let response: Response = data;
  //             window.alert(response.statusText);
  //           }, error => {
  //             window.alert(error.error.statusText);
  //           })
  //           break;
  //         }
  //     }
  //   }, error => {
  //     window.alert(error.error.statusText);
  //   })
  // }

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
