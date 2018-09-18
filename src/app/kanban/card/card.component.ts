import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'tb-card',
  template: `
    <mat-card [routerLink]="content.guid">
      <mat-card-content><p [innerHTML]="content.title"></p></mat-card-content>
      <mat-card-actions>
        <ng-content></ng-content>
        <button
          mat-icon-button
          (click)="raiseRemove()">
          <mat-icon>delete</mat-icon>
        </button>
        <tb-favorite-toggle-button
          [isFavorite]="content.isFavorite"
          (favor)="raiseFavor()"
          (disfavor)="raiseDisfavor()">
        </tb-favorite-toggle-button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
