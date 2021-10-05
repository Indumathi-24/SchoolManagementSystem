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
  constructor(private subjectAssignService: SubjectAssignService, private teacherAssignService: TeacherAssignService, private classRoomService: ClassService, private studentService: StudentService) { }

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
          })
        }, error => {
          window.alert(error.error.statusText);
        })
      }
    }, error => {
      window.alert(error.error.statusText);
    })
  }

  getSubjects() {
    let classes: string = this.GetStudentForm.get('classes')?.value;
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
    }, error => {
      window.alert(error.error.statusText);
    })

  }



}
