import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParticularResultComponent } from './view-particular-result.component';

describe('ViewParticularResultComponent', () => {
  let component: ViewParticularResultComponent;
  let fixture: ComponentFixture<ViewParticularResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParticularResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParticularResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
