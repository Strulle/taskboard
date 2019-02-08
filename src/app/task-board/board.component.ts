import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models';

@Component({
  selector: 'tb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  todos$: Observable<Task[]>;
  query: string;

  constructor() {}

  ngOnInit() {}

  updateQuery(query: string) {
    this.query = query;
  }
}
