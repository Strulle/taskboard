import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tb-task-quick-add',
  styleUrls: ['./task-quick-add.component.scss'],
  template: `
    <input type="text" [formControl]="title" />
    <button (click)="emitDraft()" [disabled]="title.invalid">CREATE</button>
  `
})
export class TaskQuickAddComponent {
  title = new FormControl('', [Validators.required]);

  @Output() create = new EventEmitter();

  emitDraft() {
    this.create.emit(this.title.value);
    this.title.reset();
  }
}
