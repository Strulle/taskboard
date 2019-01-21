import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Mode } from '../models/mode';

@Component({
  selector: 'tb-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements AfterViewInit {
  mode = Mode.ReadOnly;
  isReadMode: boolean;

  constructor(
    private _renderer: Renderer2,
    private _host: ElementRef<HTMLElement>
  ) {
    this.isReadMode = true;
  }

  ngAfterViewInit(): void {
    const remove = this._renderer.listen(
      this._host.nativeElement,
      'click',
      () => this._activateEditModeOnce(remove)
    );
  }

  activateReadOnlyMode() {
    this.mode = Mode.ReadOnly;
    this.isReadMode = true;
  }

  activateEditMode() {
    this.mode = Mode.Edit;
    this.isReadMode = false;
  }

  private _activateEditModeOnce(remove: () => void): void {
    this.activateEditMode();
    remove();
  }
}
