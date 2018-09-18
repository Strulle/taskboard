import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { Task } from '../models';

@Component({
  selector: 'tb-todo-list',
  template: `
    <h4 class="title">{{ title }} <small>{{ tasks.count }}</small></h4>
    <tb-card
      [content]="task | highlight:taskTitleQuery"
      (remove)="removeTaskFromList($event)"
      (favor)="favorTaskOfList($event)"
      (disfavor)="disfavorTaskOfList($event)"
      *ngFor="let task of tasks.items">
      <tb-process-task-button
        [task]="task"
        (proceed)="processSingleTask.emit(task)"
      ></tb-process-task-button>
    </tb-card>

    <ng-content></ng-content>
  `,
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent extends CardListComponent {
  @Output()
  processSingleTask = new EventEmitter<Task>();
}
