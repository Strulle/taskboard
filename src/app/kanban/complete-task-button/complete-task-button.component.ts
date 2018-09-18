import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-complete-task-button',
  template: `
    <button mat-icon-button (click)="complete.emit(task)">
      <mat-icon>done</mat-icon>
    </button>
  `,
  styleUrls: ['./complete-task-button.component.scss']
})
export class CompleteTaskButtonComponent {
  @Input()
  task: Task;

  @Output()
  complete = new EventEmitter<Task>();
}
