import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-card',
  template: `
    <mat-card>
      <mat-card-content>{{ content.title }}</mat-card-content>
      <mat-card-actions>
        <button
          mat-button
          (click)="raiseRemove()">
          DELETE
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  content: Task;

  @Output()
  remove = new EventEmitter<Task>();

  raiseRemove() {
    this.remove.emit(this.content);
  }
}
