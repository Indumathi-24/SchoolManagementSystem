import { TestBed } from '@angular/core/testing';

import { TeacherSignUpService } from './teacher-sign-up.service';

describe('TeacherSignUpService', () => {
  let service: TeacherSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
