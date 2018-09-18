import { Component, OnInit } from '@angular/core';
import { Tasks } from './lib/tasks.service';
import { Card, Task } from './models';

@Component({
  selector: 'tb-board',
  template: `
    <h1 class="mat-h1 title">Kanban</h1>

    <tb-card-list
      title="ToDo"
      [tasks]="tasks.todo$ | async"
      (removeSingleTask)="removeTaskFromList($event)"
      (favorSingleTask)="favorSingleTask($event)"
      (disfavorSingleTask)="disfavorSingleTask($event)">
      <tb-toggle-card-form (create)="addTaskToToDo($event)">
      </tb-toggle-card-form>
    </tb-card-list>

    <tb-card-list
      title="Doing"
      [tasks]="tasks.doing$ | async"
      (removeSingleTask)="removeTaskFromList($event)"
      (favorSingleTask)="favorSingleTask($event)"
      (disfavorSingleTask)="disfavorSingleTask($event)">
    </tb-card-list>

    <tb-card-list
      title="Done"
      [tasks]="tasks.done$ | async"
      (removeSingleTask)="removeTaskFromList($event)"
      (favorSingleTask)="favorSingleTask($event)"
      (disfavorSingleTask)="disfavorSingleTask($event)">
    </tb-card-list>
  `,
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  constructor(public tasks: Tasks) {}

  ngOnInit() {
    this.tasks.getAll().subscribe();
  }

  addTaskToToDo(card: Card) {
    this.tasks.create(card).subscribe();
  }

  removeTaskFromList(task: Task) {
    this.tasks.remove(task).subscribe();
  }

  favorSingleTask(task: Task) {
    this.tasks.favor(task).subscribe();
  }

  disfavorSingleTask(task: Task) {
    this.tasks.disfavor(task).subscribe();
  }
}
