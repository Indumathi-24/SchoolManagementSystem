import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarkClassComponent } from './view-mark-class.component';

describe('ViewMarkClassComponent', () => {
  let component: ViewMarkClassComponent;
  let fixture: ComponentFixture<ViewMarkClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMarkClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarkClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
