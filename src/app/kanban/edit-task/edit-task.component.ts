import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Tasks } from '../lib/tasks.service';
import { Task } from '../models';

@Component({
  selector: 'tb-edit-task',
  template: `
    <mat-card *ngIf="task">
      <mat-card-title>{{ task.title }}</mat-card-title>
      <mat-card-content>
        <form [formGroup]="editForm" class="edit-form">
          <mat-form-field>
            <input formControlName="title" matInput type="text" placeholder="Title">
          </mat-form-field>
          <mat-form-field>
            <textarea
              formControlName="text"
              matInput
              type="text"
              placeholder="Text">
            </textarea>
          </mat-form-field>
        </form>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button (click)="save()">
          SAVE
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnDestroy {
  task: Task;
  destroy$$ = new Subject<void>();

  editForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _tasks: Tasks
  ) {}

  ngOnInit() {
    this.editForm = this._declareForm();

    this._route.paramMap
      .pipe(
        takeUntil(this.destroy$$),
        map(params => params.get('guid')),
        switchMap(guid => this._tasks.getSingle(guid)),
        tap(task => this._fillForm(task))
      )
      .subscribe(task => (this.task = task));
  }

  ngOnDestroy() {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  save() {
    this._tasks
      .update({ ...this.task, ...this.editForm.value })
      .pipe(tap(() => this._router.navigate(['/'])))
      .subscribe();
  }

  private _declareForm() {
    return this._fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  private _fillForm(task: Task): any {
    this.editForm.setValue({
      title: task.title,
      text: task.text
    });
  }
}
