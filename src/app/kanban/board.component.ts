import { Component, OnInit } from '@angular/core';
import { Tasks } from './lib/tasks.service';
import { Card, Task } from './models';

@Component({
  selector: 'tb-board',
  template: `
    <h1 class="mat-h1 title">Kanban</h1>
    <tb-card-list
      title="ToDo"
      [tasks]="tasks"
      (removeSingleTask)="removeTaskFromList($event)">
      <tb-toggle-card-form (create)="addTaskToToDo($event)">
      </tb-toggle-card-form>
    </tb-card-list>
  `,
  styleUrls: ['./board.component.scss']
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

  removeTaskFromList(task: Task) {
    this._tasks.remove(task);
    this.tasks = this._tasks.getAll();
  }
}
