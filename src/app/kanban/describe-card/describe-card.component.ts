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
          formControlName="description"
          placeholder="Description">
        </textarea>
      </mat-form-field>
      <button
        type="submit"
        mat-raised-button
        color="primary">Create</button>
    </form>
  `,
  styles: [
    `
      :host {
        display: block;
        max-width: 500px;
      }

      .form {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class DescribeCardComponent {
  form: FormGroup;

  @Output()
  create = new EventEmitter<Card>();

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
      description: ['', [Validators.maxLength(150), Validators.minLength(5)]]
    });
  }
}
