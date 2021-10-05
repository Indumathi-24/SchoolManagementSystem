import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMasterSignUpComponent } from './head-master-sign-up.component';

describe('HeadMasterSignUpComponent', () => {
  let component: HeadMasterSignUpComponent;
  let fixture: ComponentFixture<HeadMasterSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMasterSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMasterSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
