import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSubjectAssignComponent } from './teacher-subject-assign.component';

describe('TeacherSubjectAssignComponent', () => {
  let component: TeacherSubjectAssignComponent;
  let fixture: ComponentFixture<TeacherSubjectAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSubjectAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSubjectAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
