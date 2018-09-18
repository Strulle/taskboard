import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTaskButtonComponent } from './complete-task-button.component';

describe('CompleteTaskButtonComponent', () => {
  let component: CompleteTaskButtonComponent;
  let fixture: ComponentFixture<CompleteTaskButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTaskButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
