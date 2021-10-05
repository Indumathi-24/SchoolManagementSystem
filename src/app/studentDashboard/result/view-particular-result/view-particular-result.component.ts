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

  markList: Mark[] = [];
  marks: number[] = [];
  constructor(private markService: MarkService) { }

  ngOnInit(): void {
    this.markService.getParticularSubjectMark(2017501001).subscribe(data => {
      let response: Response = data;
      this.markList = response.data;
      for (let i = 0; i < this.markList.length; i++) {
        this.marks.push(Number(this.markList[i].tamil) + Number(this.markList[i].english) + Number(this.markList[i].maths) + Number(this.markList[i].science) + Number(this.markList[i].socialScience));
      }
    }, error => {
      window.alert(error.error.statusText);
    })
  }

}
