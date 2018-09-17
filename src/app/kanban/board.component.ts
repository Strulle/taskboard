import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Tasks } from './lib/tasks.service';
import { Card, Task, TasksAggregate } from './models';

@Component({
  selector: 'tb-board',
  template: `
    <h1 class="mat-h1 title">Kanban</h1>
    <tb-card-list
      title="ToDo"
      *ngIf="tasks$ | async as tasks"
      [tasks]="tasks"
      (removeSingleTask)="removeTaskFromList($event)"
      (favorSingleTask)="favorSingleTask($event)"
      (disfavorSingleTask)="disfavorSingleTask($event)"
      >

      <tb-toggle-card-form (create)="addTaskToToDo($event)">
      </tb-toggle-card-form>

    </tb-card-list>
  `,
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks$ = this._tasks.all$;

  constructor(private _tasks: Tasks) {}

  ngOnInit() {
    this._tasks.getAll().subscribe();
  }

  addTaskToToDo(card: Card) {
    this._tasks.create(card).subscribe();
  }

  removeTaskFromList(task: Task) {
    this._tasks.remove(task).subscribe();
  }

  favorSingleTask(task: Task) {
    this._tasks.favor(task).subscribe();
  }

  disfavorSingleTask(task: Task) {
    this._tasks.disfavor(task).subscribe();
  }
}
