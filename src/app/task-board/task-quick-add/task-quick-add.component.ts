import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'tb-task-quick-add',
  templateUrl: './task-quick-add.component.html',
  styleUrls: ['./task-quick-add.component.scss']
})
export class TaskQuickAddComponent implements OnDestroy {
  private _destroy$$ = new Subject();

  title = new FormControl('', [Validators.required]);

  @Output() create = new EventEmitter();

  ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }

  emitDraft() {
    this.create.emit(this.title.value);
    this.title.reset();
  }
}
