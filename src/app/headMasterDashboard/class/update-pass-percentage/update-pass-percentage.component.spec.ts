import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassPercentageComponent } from './update-pass-percentage.component';

describe('UpdatePassPercentageComponent', () => {
  let component: UpdatePassPercentageComponent;
  let fixture: ComponentFixture<UpdatePassPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePassPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePassPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
