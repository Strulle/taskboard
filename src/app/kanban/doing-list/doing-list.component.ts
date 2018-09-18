import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { Task } from '../models';

@Component({
  selector: 'tb-doing-list',
  template: `
    <h4 class="title">{{ title }} <small>{{ tasks.count }}</small></h4>
    <tb-card
      [content]="task"
      (remove)="removeTaskFromList($event)"
      (favor)="favorTaskOfList($event)"
      (disfavor)="disfavorTaskOfList($event)"
      *ngFor="let task of tasks.items">
      <tb-complete-task-button
        [task]="task"
        (complete)="completeTask.emit(task)"
      ></tb-complete-task-button>
    </tb-card>
		`,
  styleUrls: ['./doing-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoingListComponent extends CardListComponent {
  @Output()
  completeTask = new EventEmitter<Task>();
}
