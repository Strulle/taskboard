import { Component, Input } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  @Input() task: Task;
}
