import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-module',
  templateUrl: './teacher-module.component.html',
  styleUrls: ['./teacher-module.component.css']
})
export class TeacherModuleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back()
  {
    this.router.navigate(['teacherlogin']);
  }
}
