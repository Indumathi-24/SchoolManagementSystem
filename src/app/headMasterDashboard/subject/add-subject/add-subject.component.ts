import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Response } from 'src/app/model/response';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

   AddSubjectForm = new FormGroup({
     code:new FormControl(''),
     name:new FormControl('')
   })

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  }

  saveSubject()
  {
    let subjectDetail :Subject = new Subject();
    subjectDetail.code = this.AddSubjectForm.get('code')?.value;
    subjectDetail.name = this.AddSubjectForm.get('name')?.value;
    this.subjectService.saveSubjectDetails(subjectDetail).subscribe(data=>
      {
        let response:Response = data;
        window.alert(response.statusText);
        this.AddSubjectForm.reset();
      },error=>{
        window.alert(error.error.statusText);
      })
  }
}
