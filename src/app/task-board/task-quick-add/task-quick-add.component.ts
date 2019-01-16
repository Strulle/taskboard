import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tb-task-quick-add',
  templateUrl: './task-quick-add.component.html',
  styleUrls: ['./task-quick-add.component.scss']
})
export class TaskQuickAddComponent implements OnDestroy {
  destroy$$ = new Subject();

  title = new FormControl('');

  @Output() create = new EventEmitter();

  constructor() {
    this.title.valueChanges
      .pipe(
        takeUntil(this.destroy$$),
        filter(value => !!value && value.trim().length > 0)
      )
      .subscribe(value => this.create.emit(value));
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
