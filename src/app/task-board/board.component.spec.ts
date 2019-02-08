import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BoardComponent } from './board.component';

describe('<tb-board>', () => {
  let sut: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BoardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    sut = TestBed.createComponent(BoardComponent);
  });

  beforeEach(() => {
    sut.componentInstance.todos$ = of([{}, {}]) as any;
    sut.detectChanges();
  });

  describe('When the board contains 2 ToDos', () => {
    it('should display 2 task cards', () => {
      const todoCards = sut.debugElement.queryAll(By.css('tb-task-card'));

      expect(todoCards.length).toBe(2);
    });
  });
});
