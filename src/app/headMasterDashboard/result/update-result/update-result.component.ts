import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import { ResultService } from 'src/app/service/result.service';
import { StudentService } from 'src/app/service/student.service';
import { Response} from 'src/app/model/response';
import { ClassRoom } from 'src/app/model/class-room';
import { Student } from 'src/app/model/student';
import { Result } from 'src/app/model/result';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {
  
  UpdateResultForm = new FormGroup({
    roomNo:new FormControl(''),
    rollNo:new FormControl(''),
    term1:new FormControl(''),
    term2:new FormControl(''),
    term3:new FormControl('')
  })

  classDetail:ClassRoom = new ClassRoom();
  classList:ClassRoom[] = [];
  studentList:Student[] = [];
  studentDetail:Student = new Student();
  resultDetail:Result  = new Result();
  constructor(private resultService:ResultService,private classService:ClassService,private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.classService.getClassDetails().subscribe(data=>{
      let response:Response = data;
      this.classList = response.data;},error=>{
        window.alert(error.error.statusText);
      })
  }
  getStudents()
  {
    this.studentService.getAllStudent(this.UpdateResultForm.get('roomNo')?.value).subscribe(data=>{
      let response:Response = data;
      this.studentList = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }
  getParticularStudentResult()
  {
    this.resultService.getParticularResult(this.UpdateResultForm.get('rollNo')?.value).subscribe(data=>{
      let response:Response = data;
      this.resultDetail = response.data;
    },error=>{
      window.alert(error.error.statusText);
    })
  }
  updateResultDetails()
  {
      this.resultService.updateParticularResult(this.UpdateResultForm.get('rollNo')?.value,Number(this.resultDetail.resultId),this.resultDetail).subscribe(data=>{
        let response:Response = data;
        this.resultDetail = response.data;
        window.alert(response.statusText);
      },error=>{
        window.alert(error.error.statusText);
      })
  }
  back()
  {
      this.router.navigate(['headmastermodule']);
  }
}
