import { Component, OnInit } from '@angular/core';
import { Mark } from 'src/app/model/mark';
import { MarkService } from 'src/app/service/mark.service';
import { SubjectService } from 'src/app/service/subject.service';
import { Response } from 'src/app/model/response';
import { Subject } from 'src/app/model/subject';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-mark',
  templateUrl: './update-mark.component.html',
  styleUrls: ['./update-mark.component.css']
})
export class UpdateMarkComponent implements OnInit {

  UpdateMarkForm = new FormGroup({
    mark:new FormControl(''),
    termType:new FormControl('')
  })

  termList: string[] = ['I', 'II', 'III'];
  constructor(public dialogRef: MatDialogRef<UpdateMarkComponent>,private markService:MarkService,private subjectService:SubjectService) { }

  ngOnInit(): void {
  }
  
  rollNo:number = Number(localStorage.getItem('rollNo'));
  subjectCode:string = String(localStorage.getItem('code'));

  updateMark()
  {
    const markDetail: Mark = new Mark();
    this.subjectService.getSubjectName(this.subjectCode).subscribe(data => {
      let response: Response = data;
      let subject: Subject = response.data;
      switch (subject.name) {
        case 'Tamil':
          {
            markDetail.tamil = this.UpdateMarkForm.get('mark')?.value;
            markDetail.termType = this.UpdateMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.subjectCode, this.rollNo, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }
        case 'English':
          {
            markDetail.english = this.UpdateMarkForm.get('mark')?.value;
            markDetail.termType = this.UpdateMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.subjectCode, this.rollNo, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }
        case 'Maths':
          {
            markDetail.maths = this.UpdateMarkForm.get('mark')?.value;
            markDetail.termType = this.UpdateMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.subjectCode, this.rollNo, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);

            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }

        case 'Science':
          {
            markDetail.science = this.UpdateMarkForm.get('mark')?.value;
            markDetail.termType = this.UpdateMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.subjectCode, this.rollNo, markDetail).subscribe(data => {
              let response: Response = data;
              window.alert(response.statusText);
            }, error => {
              window.alert(error.error.statusText);
            })
            break;
          }

        case 'SocialScience':
          {
            markDetail.socialScience = this.UpdateMarkForm.get('mark')?.value;
            markDetail.termType = this.UpdateMarkForm.get('termType')?.value;
            this.markService.updateMarkDetails(this.subjectCode, this.rollNo, markDetail).subscribe(data => {
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
    this.dialogRef.close();
  }
}
