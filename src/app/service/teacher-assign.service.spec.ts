import { TestBed } from '@angular/core/testing';

import { TeacherAssignService } from './teacher-assign.service';

describe('TeacherAssignService', () => {
  let service: TeacherAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
