import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import { Mode, Task } from '../models';

@Component({
  selector: 'tb-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements AfterViewInit {
  @Input() task: Task;

  mode = Mode;
  state = Mode.ReadOnly;

  constructor(
    private _renderer: Renderer2,
    private _host: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {
    const remove = this._renderer.listen(
      this._host.nativeElement,
      'click',
      () => this._activateEditModeOnce(remove)
    );
  }

  activateReadOnlyMode() {
    this.state = Mode.ReadOnly;
  }

  activateEditMode() {
    this.state = Mode.Edit;
  }

  private _activateEditModeOnce(remove: () => void): void {
    this.activateEditMode();
    remove();
  }
}
