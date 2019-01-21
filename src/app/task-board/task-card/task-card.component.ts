import { Component } from '@angular/core';
import { Mode } from '../models/mode';

@Component({
  selector: 'tb-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  mode = Mode.ReadOnly;
}
