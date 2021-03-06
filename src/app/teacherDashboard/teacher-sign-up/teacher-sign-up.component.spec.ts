import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSignUpComponent } from './teacher-sign-up.component';

describe('TeacherSignUpComponent', () => {
  let component: TeacherSignUpComponent;
  let fixture: ComponentFixture<TeacherSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
