import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-process-task-button',
  template: `
    <button mat-icon-button (click)="proceed.emit(task)">
      <mat-icon>build</mat-icon>
    </button>
  `,
  styleUrls: ['./process-task-button.component.scss']
})
export class ProcessTaskButtonComponent {
  @Input()
  task: Task;

  @Output()
  proceed = new EventEmitter<Task>();
}
