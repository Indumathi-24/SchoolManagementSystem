import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectAssignComponent } from './view-subject-assign.component';

describe('ViewSubjectAssignComponent', () => {
  let component: ViewSubjectAssignComponent;
  let fixture: ComponentFixture<ViewSubjectAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubjectAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubjectAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
