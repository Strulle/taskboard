import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'tb-toggle-card-form',
  template: `
    <button
      *ngIf="!isInCreateMode"
      mat-button
      (click)="showForm()"
      class="button-create">
      CREATE
    </button>
    <tb-describe-card
      *ngIf="isInCreateMode"
      (create)="raiseCreate($event)"
      (cancel)="hideForm()">
    </tb-describe-card>
  `,

  styleUrls: ['./toggle-card-form.component.scss']
})
export class ToggleCardFormComponent {
  isInCreateMode = false;

  @Output()
  create = new EventEmitter<Card>();

  constructor() {}

  showForm() {
    this.isInCreateMode = true;
  }

  hideForm() {
    this.isInCreateMode = false;
  }

  raiseCreate(card: Card) {
    this.create.emit(card);
    this.hideForm();
  }
}
