import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tb-task-quick-add',
  templateUrl: './task-quick-add.component.html',
  styleUrls: ['./task-quick-add.component.scss']
})
export class TaskQuickAddComponent {
  title = new FormControl('', [Validators.required]);

  @Output() create = new EventEmitter();

  emitDraft() {
    this.create.emit(this.title.value);
    this.title.reset();
  }
}
