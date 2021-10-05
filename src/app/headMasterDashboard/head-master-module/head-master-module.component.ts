import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-master-module',
  templateUrl: './head-master-module.component.html',
  styleUrls: ['./head-master-module.component.css']
})
export class HeadMasterModuleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back()
  {
     this.router.navigate(['headmasterlogin']);
  }
}
