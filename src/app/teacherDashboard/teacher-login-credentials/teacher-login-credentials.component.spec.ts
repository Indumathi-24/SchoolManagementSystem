import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLoginCredentialsComponent } from './teacher-login-credentials.component';

describe('TeacherLoginCredentialsComponent', () => {
  let component: TeacherLoginCredentialsComponent;
  let fixture: ComponentFixture<TeacherLoginCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherLoginCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLoginCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
