import { Component, OnInit } from '@angular/core';
import { Tasks } from './lib/tasks.service';
import { Card } from './models';

@Component({
  selector: 'tb-board',
  template: `
    <h1 class="mat-h1">Kanban</h1>
    <tb-describe-card (create)="addTaskToToDo($event)"></tb-describe-card>
    <tb-card-list
      title="ToDo"
      [cards]="tasks">
    </tb-card-list>
  `
})
export class BoardComponent implements OnInit {
  tasks: Card[];

  constructor(private _tasks: Tasks) {}

  ngOnInit() {
    this.tasks = this._tasks.getAll();
  }

  addTaskToToDo(card: Card) {
    this._tasks.create(card);
    this.tasks = this._tasks.getAll();
  }
}
