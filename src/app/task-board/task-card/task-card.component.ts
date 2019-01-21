import {
  Component,
  HostListener,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Mode } from '../models/mode';

@Component({
  selector: 'tb-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements AfterViewInit {
  mode = Mode.ReadOnly;

  constructor(private _host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this._host.nativeElement.addEventListener('click', () =>
      this.activateEditMode()
    );
  }

  activateEditMode() {
    this.mode = Mode.Edit;
    this._host.nativeElement.removeEventListener('click', () =>
      this.activateEditMode()
    );
  }
}
