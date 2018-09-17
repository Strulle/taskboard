import { Component, OnInit } from '@angular/core';
import { Tasks } from './lib/tasks.service';
import { Card, Task } from './models';
import { Observable } from 'rxjs';
import { switchMapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tb-board',
  template: `
    <h1 class="mat-h1 title">Kanban</h1>
    <tb-card-list
      title="ToDo"
      [tasks]="tasks$ | async"
      (removeSingleTask)="removeTaskFromList($event)">
      <tb-toggle-card-form (create)="addTaskToToDo($event)">
      </tb-toggle-card-form>
    </tb-card-list>
  `,
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private _tasks: Tasks) {}

  ngOnInit() {
    this.tasks$ = this._refreshTasks();
  }

  addTaskToToDo(card: Card) {
    this.tasks$ = this._tasks
      .create(card)
      .pipe(switchMap(() => this._refreshTasks()));
  }

  removeTaskFromList(task: Task) {
    this.tasks$ = this._tasks
      .remove(task)
      .pipe(switchMap(() => this._refreshTasks()));
  }

  private _refreshTasks() {
    return this._tasks.getAll();
  }
}
