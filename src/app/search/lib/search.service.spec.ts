import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let sut: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SearchService] });

    sut = TestBed.get(SearchService);
  });

  describe('When the query is updated', () => {
    /**
     * The helper tick is used two times in this test.
     * We want to be sure that the query is emitted after 200 milliseconds
     * After 100 milliseconds no observer should have the new value.
     * Now our service still has the delay running for another 100 milliseconds
     * fakeAsync lets the test fail since a timer has not completed.
     * Therefore, we need the second tick function
     */
    it('should not emit the update for 200 milliseconds', fakeAsync(() => {
      const observer = { next: jest.fn() };
      const next = jest.spyOn(observer, 'next');

      sut.valueChanges$.subscribe(observer);
      sut.update('some');

      tick(100);

      expect(next).not.toBeCalled();

      tick(100);
    }));

    it('should emit the update after 200 milliseconds', fakeAsync(() => {
      const observer = { next: jest.fn() };
      const next = jest.spyOn(observer, 'next');

      sut.valueChanges$.subscribe(observer);
      sut.update('some');

      tick(200);

      expect(next).toBeCalled();
    }));
  });
});
