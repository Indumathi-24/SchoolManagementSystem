import { TestBed } from '@angular/core/testing';

import { SubjectAssignService } from './subject-assign.service';

describe('SubjectAssignService', () => {
  let service: SubjectAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
