import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMasterLoginComponent } from './head-master-login.component';

describe('HeadMasterLoginComponent', () => {
  let component: HeadMasterLoginComponent;
  let fixture: ComponentFixture<HeadMasterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMasterLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMasterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
