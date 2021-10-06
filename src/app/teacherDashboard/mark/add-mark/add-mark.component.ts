import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassService } from 'src/app/service/class.service';
import { Response } from 'src/app/model/response';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';
import { TeacherAssignService } from 'src/app/service/teacher-assign.service';
import { Subject } from 'src/app/model/subject';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { SubjectService } from 'src/app/service/subject.service';
import { Mark } from 'src/app/model/mark';
import { MarkService } from 'src/app/service/mark.service';
import { ClassRoom } from 'src/app/model/class-room';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent implements OnInit {

  AddMarkForm = new FormGroup({
    classes: new FormControl(''),
    subjectCode: new FormControl(''),
    teacherId: new FormControl(''),
    rollNo: new FormControl(''),
    mark: new FormControl(''),
    termType: new FormControl('')
  })
  
  standardList: string[] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  sectionList: string[] = ['A', 'B', 'C', 'D', 'E'];
  termList: string[] = ['I', 'II', 'III'];
  roomNo: number = 0;
  studentList: Student[] = [];
  subjectAssignIdList: number[] = [];
  subjectList: string[] = [];
  classList: ClassRoom[] = [];
  roomNoList:number[]=[];

  constructor(private markService: MarkService, private subjectService: SubjectService, private subjectAssignService: SubjectAssignService, private teacherAssignService: TeacherAssignService, private classService: ClassService, private studentService: StudentService) { }

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
    },error=>{
      window.alert(error.error.statusText);
    })
    },error=>{
      window.alert(error.error.statusText);
    })
  },error=>{
    window.alert(error.error.statusText);
  })
  }

  getSubjects()
  {
    let classes: string = this.AddMarkForm.get('classes')?.value;
    let classesList: string[] = classes.split('-');
    this.classService.getRoomNo(classesList[0], classesList[1]).subscribe(data => {
      let response: Response = data;
      this.roomNo = response.data;
    this.subjectAssignService.getSubjectCodeList(this.roomNo,this.subjectAssignIdList).subscribe(data=>{
      let response: Response = data;
      this.subjectList = response.data;
      },error=>{
        window.alert(error.error.statusText);
      })
      this.getStudents();
    },error=>{
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


  saveMark() {
    const markDetail: Mark = new Mark();
    this.subjectService.getSubjectName(this.AddMarkForm.get('subjectCode')?.value).subscribe(data => {
      let response: Response = data;
      let subject: Subject = response.data;
      switch (subject.name) {
        case 'Tamil':
          {
            markDetail.tamil = this.AddMarkForm.get('mark')?.value;
            markDetail.termType = this.AddMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }
        case 'English':
          {
            markDetail.english = this.AddMarkForm.get('mark')?.value;
            markDetail.termType = this.AddMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }
        case 'Maths':
          {
            markDetail.maths = this.AddMarkForm.get('mark')?.value;
            markDetail.termType = this.AddMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);

            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }

        case 'Science':
          {
            markDetail.science = this.AddMarkForm.get('mark')?.value;
            markDetail.termType = this.AddMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }

        case 'SocialScience':
          {
            markDetail.socialScience = this.AddMarkForm.get('mark')?.value;
            markDetail.termType = this.AddMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.AddMarkForm.get('subjectCode')?.value, this.AddMarkForm.get('rollNo')?.value, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }
      }
    }, error => {
      window.alert(error.error.statusText);
    })
  }
}
