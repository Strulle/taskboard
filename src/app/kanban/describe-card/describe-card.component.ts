import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../models';

@Component({
  selector: 'tb-describe-card',
  template: `
    <form [formGroup]="form" (ngSubmit)="raiseCreate()" class="form">
      <mat-form-field>
        <input
          matInput
          formControlName="title"
          placeholder="Task">
      </mat-form-field>
      <mat-form-field>
        <textarea
          matInput
          formControlName="text"
          placeholder="Description">
        </textarea>
      </mat-form-field>
      <mat-card-actions>
        <button
          [disabled]="form.invalid"
          mat-button
          type="submit">
          ADD
        </button>
        <button
          (click)="cancel.emit()"
          mat-button
          type="button">
          CANCEL
        </button>
      </mat-card-actions>
    </form>
  `,
  styleUrls: ['./describe-card.component.scss']
})
export class DescribeCardComponent {
  form: FormGroup;

  @Output()
  create = new EventEmitter<Card>();

  @Output()
  cancel = new EventEmitter<void>();

  constructor(private _fb: FormBuilder) {
    this.form = this._declareForm();
  }

  raiseCreate() {
    this.create.emit({ ...this.form.value });
    this.form.reset();
  }

  private _declareForm() {
    return this._fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.maxLength(150), Validators.minLength(5)]]
    });
  }
}
