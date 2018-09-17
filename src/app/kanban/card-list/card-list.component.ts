import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-card-list',
  template: `
    <h4 class="title">{{ title }}</h4>
    <tb-card
      [content]="card"
      (remove)="removeTaskFromList($event)"
      *ngFor="let card of tasks">
    </tb-card>
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input()
  title: string;

  @Input()
  tasks: Task[];

  @Output()
  removeSingleTask = new EventEmitter<Task>();

  removeTaskFromList(task: Task) {
    this.removeSingleTask.emit(task);
  }
}
