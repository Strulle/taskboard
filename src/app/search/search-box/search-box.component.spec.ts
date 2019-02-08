import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchService } from '../lib';
import { SearchBoxComponent } from './search-box.component';

describe('<search-box>', () => {
  let sut: ComponentFixture<SearchBoxComponent>;
  let search: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      providers: [SearchService]
    }).compileComponents();

    sut = TestBed.createComponent(SearchBoxComponent);
    sut.detectChanges();

    search = TestBed.get(SearchService);
  });

  describe('When a search query is entered', () => {
    it('should update the query ', done => {
      const expectedQuery = 'a';
      const input: HTMLInputElement = sut.debugElement.query(
        By.css('[name=search-query]')
      ).nativeElement;

      input.value = expectedQuery;
      input.dispatchEvent(new Event('input'));

      sut.detectChanges();

      search.valueChanges$.subscribe(query => {
        expect(query).toBe(expectedQuery);
        done();
      });
    });
  });
});
