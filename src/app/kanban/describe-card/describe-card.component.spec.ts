import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DescribeCardComponent } from "./describe-card.component";

describe("DescribeCardComponent", () => {
  let component: DescribeCardComponent;
  let fixture: ComponentFixture<DescribeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DescribeCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
