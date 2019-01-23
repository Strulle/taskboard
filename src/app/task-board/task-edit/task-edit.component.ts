import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models';

@Component({
  selector: 'tb-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  @Input() task: Task = { title: '', text: '' };
  @Output() update = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  editGroup: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.editGroup = this._fb.group({
      title: [this.task.title],
      text: [this.task.text]
    });
  }

  updateOnChange() {
    if (this._areDifferent(this.task, this.editGroup.value)) {
      this.update.emit(this.editGroup.value);
    } else {
      this.cancel.emit();
    }
  }

  private _areDifferent(a: unknown, b: unknown) {
    return JSON.stringify(a) !== JSON.stringify(b);
  }
}
