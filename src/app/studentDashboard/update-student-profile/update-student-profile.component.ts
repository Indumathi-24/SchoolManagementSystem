import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/service/parent.service';
import { StudentService } from 'src/app/service/student.service';
import { Response } from 'src/app/model/response';
import { Student } from 'src/app/model/student';
import { Parent } from 'src/app/model/parent';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update-student-profile',
  templateUrl: './update-student-profile.component.html',
  styleUrls: ['./update-student-profile.component.css']
})
export class UpdateStudentProfileComponent implements OnInit {

  student: Student = new Student();
  parents: Parent[] = [];
  parent: Parent = new Parent();
  roomNo: number = 0;
  constructor(public dialogRef: MatDialogRef<UpdateStudentProfileComponent>, private parentService: ParentService, private studentService: StudentService) { }

  studentId: number = Number(localStorage.getItem('user'));

  ngOnInit(): void {
    this.studentService.getParticularStudent(this.studentId).subscribe(data => {
      let response: Response = data;
      this.student = response.data;
    }, error => {
      window.alert(error.error.statusText);
    })

    this.parentService.getParentDetails(this.studentId).subscribe(data => {
      let response: Response = data;
      this.parents = response.data;
      this.parent = this.parents[0];
    }, error => {
      window.alert(error.error.statusText);
    })

    this.studentService.getStudentRoomNo(this.studentId).subscribe(data => {
      let response: Response = data;
      this.roomNo = response.data;
    }, error => {
      window.alert(error.error.statusText);
    })

  }



  updatePersonalDetails() {

    this.studentService.updateParticularStudent(this.roomNo, this.studentId, this.student).subscribe(data => {
      let response: Response = data;
      window.alert(response.statusText);
    }, error => {
      window.alert(error.error.statusText);
    })
    this.parentService.updateParentDetails(Number(this.parent.id), this.parent).subscribe(data => {
      let response: Response = data;
      window.alert(response.statusText);
    }, error => {
      window.alert(error.error.statusText);
    })
  }
  cancel() {
    this.dialogRef.close();
  }
}
