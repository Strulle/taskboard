import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TaskCardComponent } from './task-card.component';

export class TaskCardInteractions {
  constructor(private _fixture: ComponentFixture<TaskCardComponent>) {}

  get nativeElement(): HTMLElement {
    return this._fixture.nativeElement;
  }

  get componentInstance(): TaskCardComponent {
    return this._fixture.componentInstance;
  }

  get debugElement(): DebugElement {
    return this._fixture.debugElement;
  }

  get leaveEditModeButton(): HTMLButtonElement {
    return this._byCss('[name=activate-read-only-mode]') as HTMLButtonElement;
  }

  get viewTemplate(): HTMLElement {
    return this._byCss('tb-task-view');
  }

  get editTemplate(): HTMLElement {
    return this._byCss('tb-task-edit');
  }

  detectChanges(): void {
    this._fixture.detectChanges();
  }

  private _byCss(selector: string) {
    return this._fixture.debugElement.query(By.css(selector)).nativeElement;
  }
}
