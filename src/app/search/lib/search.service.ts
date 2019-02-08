import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SearchService {
  private _valueChanges$$ = new ReplaySubject<string>();
  valueChanges$ = this._valueChanges$$.pipe(
    distinctUntilChanged(),
    delay(200)
  );

  update(query: string) {
    this._valueChanges$$.next(query);
  }
}
