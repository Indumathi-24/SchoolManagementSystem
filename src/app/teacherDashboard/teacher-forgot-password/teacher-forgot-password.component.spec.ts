import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherForgotPasswordComponent } from './teacher-forgot-password.component';

describe('TeacherForgotPasswordComponent', () => {
  let component: TeacherForgotPasswordComponent;
  let fixture: ComponentFixture<TeacherForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
