import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import { Response} from 'src/app/model/response'
import { ClassRoom } from 'src/app/model/class-room';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultService } from 'src/app/service/result.service';
import { Result } from 'src/app/model/result';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
   ViewStudentsResult = new FormGroup({
     standard:new FormControl(''),
     section:new FormControl('')
   })
  standardList:string[]=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  sectionList:string[]=['A','B','C','D','E'];
  classList:ClassRoom[]=[];
  studentList:Student[]=[];
  resultDetail:Result=new Result();
  resultList:Result[]=[];
   length:number =0;
   roomNo:number=0;
  constructor(private classService:ClassService,private studentService:StudentService,private resultService:ResultService,private router:Router) { }

  ngOnInit(): void {
  }

  getRoomNo()
  {
    this.classService.getRoomNo(this.ViewStudentsResult.get('standard')?.value,this.ViewStudentsResult.get('section')?.value).subscribe(data=>{
      let response:Response = data;
      this.roomNo = response.data;
    },error=>{
      window.alert(error.error.statusText)
    })
  }

  getResultByClass()
  {
      this.resultService.getResultByClass(this.roomNo).subscribe(response=>{
        let responseBody:Response = response;
        this.resultList = responseBody.data;
        console.log(this.resultList);
        this.length = this.resultList.length;
        for(let i=0;i<this.resultList.length;i++)
        {
          console.log(this.resultList[i]);
        }
      },error=>{
        window.alert(error.error.statusText)
      })
    }


  
}
