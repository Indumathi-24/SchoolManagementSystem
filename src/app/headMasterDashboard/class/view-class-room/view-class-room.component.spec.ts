import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassRoomComponent } from './view-class-room.component';

describe('ViewClassRoomComponent', () => {
  let component: ViewClassRoomComponent;
  let fixture: ComponentFixture<ViewClassRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
