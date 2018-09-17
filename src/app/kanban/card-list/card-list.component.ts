import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Task, TasksProjection } from '../models';

@Component({
  selector: 'tb-card-list',
  template: `
    <h4 class="title">{{ title }} <small>{{ tasks.count }}</small></h4>
    <tb-card
      [content]="card"
      (remove)="removeTaskFromList($event)"
      (favor)="favorTaskOfList($event)"
      (disfavor)="disfavorTaskOfList($event)"
      *ngFor="let card of tasks.items">
    </tb-card>

    <ng-content></ng-content>
  `,
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input()
  title: string;

  @Input()
  tasks: TasksProjection;

  @Output()
  removeSingleTask = new EventEmitter<Task>();

  @Output()
  favorSingleTask = new EventEmitter<Task>();

  @Output()
  disfavorSingleTask = new EventEmitter<Task>();

  removeTaskFromList(task: Task) {
    this.removeSingleTask.emit(task);
  }

  favorTaskOfList(task: Task) {
    this.favorSingleTask.emit(task);
  }

  disfavorTaskOfList(task: Task) {
    this.disfavorSingleTask.emit(task);
  }
}
