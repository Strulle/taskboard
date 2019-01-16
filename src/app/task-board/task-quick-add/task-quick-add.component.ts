import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  OnInit
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tb-task-quick-add',
  templateUrl: './task-quick-add.component.html',
  styleUrls: ['./task-quick-add.component.scss']
})
export class TaskQuickAddComponent implements OnInit, OnDestroy {
  destroy$$ = new Subject();

  title = new FormControl('', [Validators.required]);

  @Output() create = new EventEmitter();

  ngOnInit(): void {
    this._setupForm();
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  private _setupForm() {
    this.title.valueChanges
      .pipe(
        takeUntil(this.destroy$$),
        filter(value => !!value && value.trim().length > 0)
      )
      .subscribe(value => this.create.emit(value));
  }
}
