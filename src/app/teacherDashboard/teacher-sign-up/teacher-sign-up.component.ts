import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from 'src/app/model/response';
import { Teacher } from 'src/app/model/teacher';
import { TeacherSignUpService } from 'src/app/service/teacher-sign-up.service';

@Component({
  selector: 'app-teacher-sign-up',
  templateUrl: './teacher-sign-up.component.html',
  styleUrls: ['./teacher-sign-up.component.css']
})
export class TeacherSignUpComponent implements OnInit {

  TeacherSignUpForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    qualification: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    contactNo: new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.required]),
    address: new FormControl('')

  })

  teacherId:number=0;
  constructor(private teacherSignUpService: TeacherSignUpService,private router:Router) { }

  ngOnInit(): void {
  }
  saveTeacherSignUp() {
    const teacherSignUp: Teacher = new Teacher;
    teacherSignUp.id = this.TeacherSignUpForm.get('id')?.value;
    teacherSignUp.name = this.TeacherSignUpForm.get('name')?.value;
    teacherSignUp.dateOfBirth = this.TeacherSignUpForm.get('dateOfBirth')?.value;
    teacherSignUp.gender = this.TeacherSignUpForm.get('gender')?.value;
    teacherSignUp.qualification = this.TeacherSignUpForm.get('qualification')?.value;
    teacherSignUp.email = this.TeacherSignUpForm.get('email')?.value;
    teacherSignUp.contactNo = this.TeacherSignUpForm.get('contactNo')?.value;
    teacherSignUp.address = this.TeacherSignUpForm.get('address')?.value;
    this.teacherSignUpService.saveDetails(teacherSignUp).subscribe(data => {
      let response: Response = data;
      this.teacherId = response.data;
      window.alert(response.statusText);
    }, error => { window.alert(error.error.statusText) });
    if(this.teacherId!=0)
    {
      this.router.navigate(['teacherlogincredentials']);
    }
    this.TeacherSignUpForm.reset();
  }

  get name() { return this.TeacherSignUpForm.get('name'); }

  get id() { return this.TeacherSignUpForm.get('id'); }

  get email() { return this.TeacherSignUpForm.get('email'); }

  get contactNo() { return this.TeacherSignUpForm.get('contactNo'); }
}
