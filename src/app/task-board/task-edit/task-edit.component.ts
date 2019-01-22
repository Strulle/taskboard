import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tb-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  @Input() task: { title: string } = { title: '' };

  editGroup: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.editGroup = this._fb.group({
      title: [this.task.title]
    });
  }
}
