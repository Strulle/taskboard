import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SearchService } from '../search/lib';
import { SearchBoxComponent } from '../search/search-box/search-box.component';
import { BoardComponent } from './board.component';
import { FilterPipe } from './lib/pipes/filter.pipe';

describe('<tb-board>', () => {
  let sut: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BoardComponent, SearchBoxComponent, FilterPipe],
      providers: [SearchService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    sut = TestBed.createComponent(BoardComponent);

    sut.componentInstance.todos$ = of([{ title: 'a' }, { title: 'b' }]) as any;

    sut.detectChanges();
  });

  describe('When the board contains 2 ToDos', () => {
    it('should display 2 task cards', () => {
      const todoCards = sut.debugElement.queryAll(By.css('tb-task-card'));

      expect(todoCards.length).toBe(2);
    });
  });

  describe('When a card is searched', () => {
    it('should display those matching the query', () => {
      const search: HTMLInputElement = sut.debugElement.query(
        By.css('[name=search-query]')
      ).nativeElement;

      search.value = 'a';
      search.dispatchEvent(new Event('input'));

      sut.detectChanges();

      const todoCards = sut.debugElement.queryAll(By.css('tb-task-card'));

      expect(todoCards.length).toBe(1);
    });
  });
});
