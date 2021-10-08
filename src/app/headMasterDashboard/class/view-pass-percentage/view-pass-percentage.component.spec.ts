import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassPercentageComponent } from './view-pass-percentage.component';

describe('ViewPassPercentageComponent', () => {
  let component: ViewPassPercentageComponent;
  let fixture: ComponentFixture<ViewPassPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
