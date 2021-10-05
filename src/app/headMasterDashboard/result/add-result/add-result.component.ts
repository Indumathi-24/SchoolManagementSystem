import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { Response} from 'src/app/model/response';
import { ClassRoom } from 'src/app/model/class-room';
import { Student } from 'src/app/model/student';
import { FormControl, FormGroup } from '@angular/forms';
import { Result } from 'src/app/model/result';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {

  AddResultForm = new FormGroup({
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
  
  constructor(private classService:ClassService,private studentService:StudentService,private resultService:ResultService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.classService.getClassDetails().subscribe(data=>{
      let response:Response=data;
      this.classList = response.data;})
  }
  getStudents()
  {
    this.studentService.getAllStudent(this.AddResultForm.get('roomNo')?.value).subscribe(data=>{
      let response:Response = data;
      this.studentList = response.data;
    })
  }

  saveResultDetails()
  {
    const resultDetail:Result = new Result();
    resultDetail.term1 = this.AddResultForm.get('term1')?.value;
    resultDetail.term2 = this.AddResultForm.get('term2')?.value;
    resultDetail.term3 = this.AddResultForm.get('term3')?.value;
    this.resultService.saveResultDetails(this.AddResultForm.get('roomNo')?.value,this.AddResultForm.get('rollNo')?.value,resultDetail).subscribe(data=>{
      let response:Response = data;
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
