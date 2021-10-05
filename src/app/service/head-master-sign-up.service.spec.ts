import { TestBed } from '@angular/core/testing';

import { HeadMasterSignUpService } from './head-master-sign-up.service';

describe('HeadMasterSignUpService', () => {
  let service: HeadMasterSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadMasterSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
