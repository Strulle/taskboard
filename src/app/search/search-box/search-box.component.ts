import { Component } from '@angular/core';
import { SearchService } from '../lib';

@Component({
  selector: 'tb-search-box',
  template: `
    <input
      #query
      (input)="updateQuery(query.value)"
      name="search-query"
      type="text"
    />
  `,
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  constructor(private _search: SearchService) {}

  updateQuery(query: string) {
    this._search.update(query);
  }
}
