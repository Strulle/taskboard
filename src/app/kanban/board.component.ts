import { Component, OnInit } from '@angular/core';
import { Tasks } from './lib/tasks.service';
import { Card, Task } from './models';

@Component({
  selector: 'tb-board',
  template: `
    <h1 class="mat-h1 title">Kanban</h1>

    <div class="lists">
      <tb-todo-list
        title="ToDo"
        [tasks]="tasks.todo$ | async"
        (processSingleTask)="processSingleTask($event)"
        (removeSingleTask)="removeTaskFromList($event)"
        (favorSingleTask)="favorSingleTask($event)"
        (disfavorSingleTask)="disfavorSingleTask($event)">
        <tb-toggle-card-form (create)="addTaskToToDo($event)">
        </tb-toggle-card-form>
      </tb-todo-list>

      <tb-doing-list
        title="Doing"
        [tasks]="tasks.doing$ | async"
        (completeTask)="completeSingleTask($event)"
        (removeSingleTask)="removeTaskFromList($event)"
        (favorSingleTask)="favorSingleTask($event)"
        (disfavorSingleTask)="disfavorSingleTask($event)">
      </tb-doing-list>

      <tb-card-list
        title="Done"
        [tasks]="tasks.done$ | async"
        (removeSingleTask)="removeTaskFromList($event)"
        (favorSingleTask)="favorSingleTask($event)"
        (disfavorSingleTask)="disfavorSingleTask($event)">
      </tb-card-list>
    </div>
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

  processSingleTask(task: Task) {
    this.tasks.proceed(task).subscribe();
  }

  completeSingleTask(task: Task) {
    this.tasks.complete(task).subscribe();
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
