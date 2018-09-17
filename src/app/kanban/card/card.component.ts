import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-card',
  template: `
    <mat-card>
      <mat-card-content>{{ content.title }}</mat-card-content>
      <mat-card-actions>
        <button
          mat-icon-button
          (click)="raiseRemove()">
          <mat-icon>delete</mat-icon>
        </button>
        <button
          *ngIf="!content.isFavorite"
          mat-icon-button
          (click)="raiseFavor()">
          <mat-icon >favorite</mat-icon>
        </button>
        <button
          *ngIf="content.isFavorite"
          mat-icon-button
          (click)="raiseDisfavor()">
          <mat-icon color="accent">favorite</mat-icon>
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

  @Output()
  favor = new EventEmitter<Task>();

  @Output()
  disfavor = new EventEmitter<Task>();

  raiseRemove() {
    this.remove.emit(this.content);
  }

  raiseFavor() {
    this.favor.emit(this.content);
  }

  raiseDisfavor() {
    this.disfavor.emit(this.content);
  }
}
