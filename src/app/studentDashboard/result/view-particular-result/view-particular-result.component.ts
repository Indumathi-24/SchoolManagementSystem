import { Component, OnInit } from '@angular/core';
import { MarkService } from 'src/app/service/mark.service';
import { Response } from 'src/app/model/response';
import { Result } from 'src/app/model/result';
import { Mark } from 'src/app/model/mark';

@Component({
  selector: 'app-view-particular-result',
  templateUrl: './view-particular-result.component.html',
  styleUrls: ['./view-particular-result.component.css']
})
export class ViewParticularResultComponent implements OnInit {

  markList: Mark[] | any = [];
  marks: number[] | any = [];
  constructor(private markService: MarkService) { }
  
  studentId:number = Number(localStorage.getItem('user'));
  ngOnInit(): void {
    this.markService.getParticularSubjectMark(this.studentId).subscribe(data => {
      let response: Response = data;
      this.markList = response.data;
      for (let i = 0; i < this.markList.length; i++) {
        if(this.markList[i].tamil!=-1 && this.markList[i].english!=-1 && this.markList[i].maths!=-1 && this.markList[i].science!=-1 && this.markList[i].socialScience!=-1)
        {
          this.marks.push(Number(this.markList[i].tamil) + Number(this.markList[i].english) + Number(this.markList[i].maths) + Number(this.markList[i].science) + Number(this.markList[i].socialScience));
        }
        if(this.markList[i].tamil==-1)
        {
          this.markList[i].tamil='NE';
        }
        if(this.markList[i].english==-1)
        {
          this.markList[i].english='NE';
        }
        if(this.markList[i].maths==-1)
        {
          
           this.markList[i].maths='NE';
        }
        if(this.markList[i].science==-1)
        {
           this.markList[i].science='NE';
        }
        if(this.markList[i].socialScience==-1)
        {
        
          this.markList[i].socialScience='NE';
        }
        if(this.markList[i].tamil=='NE' || this.markList[i].english=='NE' || this.markList[i].maths=='NE' || this.markList[i].science=='NE' || this.markList[i].socialScience=='NE')
        {
         
          this.marks[i]='NE';
        }
      }
    }, error => {
      window.alert(error.error.statusText);
    })
  }

}
