import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMasterLoginCredentialsComponent } from './head-master-login-credentials.component';

describe('HeadMasterLoginCredentialsComponent', () => {
  let component: HeadMasterLoginCredentialsComponent;
  let fixture: ComponentFixture<HeadMasterLoginCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMasterLoginCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMasterLoginCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
