import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTaskButtonComponent } from './process-task-button.component';

describe('ProcessTaskButtonComponent', () => {
  let component: ProcessTaskButtonComponent;
  let fixture: ComponentFixture<ProcessTaskButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessTaskButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
