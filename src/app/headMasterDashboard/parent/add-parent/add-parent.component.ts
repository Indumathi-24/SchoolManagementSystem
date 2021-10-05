import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parent } from 'src/app/model/parent';
import { ParentService } from 'src/app/service/parent.service';
import { Response} from 'src/app/model/response';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {

  ParentForm = new FormGroup({
    fatherName :new FormControl(''),
    motherName:new FormControl(''),
    contactNo:new FormControl('')
  })

  
  constructor(private route:ActivatedRoute,private parentService:ParentService) { }
  
  ngOnInit(): void {
  }
  
  rollNo:number = Number(localStorage.getItem('rollNo'));
  saveParentDetails()
  {
     const parentDetail:Parent = new Parent();
      parentDetail.fatherName = this.ParentForm.get('fatherName')?.value;
      parentDetail.motherName = this.ParentForm.get('motherName')?.value;
      parentDetail.contactNo = this.ParentForm.get('contactNo')?.value;
      this.parentService.saveParentDetails(this.rollNo,parentDetail).subscribe(data=>{
        let response:Response =data;
        window.alert(response.statusText);
      },error=>{window.alert(error.error.statusText)})
  }
}
