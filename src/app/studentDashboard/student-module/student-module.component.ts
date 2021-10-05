import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-module',
  templateUrl: './student-module.component.html',
  styleUrls: ['./student-module.component.css']
})
export class StudentModuleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back()
  {
    this.router.navigate(['loginforstudent']);
  }
}
