import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCardFormComponent } from './toggle-card-form.component';

describe('ToggleCardFormComponent', () => {
  let component: ToggleCardFormComponent;
  let fixture: ComponentFixture<ToggleCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleCardFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
