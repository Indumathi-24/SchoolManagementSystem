import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { SubjectAssignService } from 'src/app/service/subject-assign.service';
import { TeacherAssignService } from 'src/app/service/teacher-assign.service';
import { Response } from 'src/app/model/response';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassRoom } from 'src/app/model/class-room';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

  GetStudentForm = new FormGroup({
    standard: new FormControl(''),
    section: new FormControl(''),
    subjectCode: new FormControl(''),
    classes: new FormControl('')
  })

  roomNo: number = 0;
  studentList: Student[] = [];
  subjectAssignIdList: number[] = [];
  length: number = 0;
  roomNoList: number[] = [];
  classList: ClassRoom[] = [];
  subjectList: string[] = [];
  constructor(private subjectAssignService: SubjectAssignService, private teacherAssignService: TeacherAssignService, private classService: ClassService, private studentService: StudentService) { }

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
    let classes: string = this.GetStudentForm.get('classes')?.value;
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
      this.length = this.studentList.length;
      console.log(this.studentList);
    }, error => {
      window.alert(error.error.statusText);
    })

  }



}
