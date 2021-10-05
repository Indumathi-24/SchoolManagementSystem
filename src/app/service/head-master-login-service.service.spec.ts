import { TestBed } from '@angular/core/testing';

import { HeadMasterLoginServiceService } from './head-master-login-service.service';

describe('HeadMasterLoginServiceService', () => {
  let service: HeadMasterLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadMasterLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
