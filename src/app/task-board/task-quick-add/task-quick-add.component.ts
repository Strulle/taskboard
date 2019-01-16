import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'tb-task-quick-add',
  templateUrl: './task-quick-add.component.html',
  styleUrls: ['./task-quick-add.component.scss']
})
export class TaskQuickAddComponent {
  title = new FormControl('');

  @Output() create = new EventEmitter();

  constructor() {
    this.title.valueChanges
      .pipe(filter(value => !!value && value.trim().length > 0))
      .subscribe(value => this.create.emit(value));
  }
}
