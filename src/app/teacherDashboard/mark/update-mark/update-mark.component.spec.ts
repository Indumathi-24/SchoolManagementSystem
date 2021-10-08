import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarkComponent } from './update-mark.component';

describe('UpdateMarkComponent', () => {
  let component: UpdateMarkComponent;
  let fixture: ComponentFixture<UpdateMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
