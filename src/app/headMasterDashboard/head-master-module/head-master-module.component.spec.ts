import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMasterModuleComponent } from './head-master-module.component';

describe('HeadMasterModuleComponent', () => {
  let component: HeadMasterModuleComponent;
  let fixture: ComponentFixture<HeadMasterModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMasterModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMasterModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
