import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mode } from '../models/mode';
import { TaskCardComponent } from './task-card.component';
import { times } from '@test';
import { By } from '@angular/platform-browser';

describe('<tb-task-card>', () => {
  let sut: ComponentFixture<TaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ declarations: [TaskCardComponent] });
    sut = TestBed.createComponent(TaskCardComponent);

    sut.detectChanges();
  }));

  describe('When it is created', () => {
    it('should be in read only mode', () => {
      expect(sut.componentInstance.mode).toBe(Mode.ReadOnly);
    });

    it('should hide the cancellation button for edit mode', () => {
      const btn: HTMLButtonElement = sut.debugElement.query(
        By.css('[name=activate-read-only-mode]')
      ).nativeElement;
      expect(btn.hasAttribute('hidden')).toBe(true);
    });
  });

  describe('When it is clicked', () => {
    it('should switch to edit mode', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      expect(sut.componentInstance.mode).toBe(Mode.Edit);
    });

    it('should not accept clicks if edit mode is active', () => {
      const activateEditMode = spyOn(sut.componentInstance, 'activateEditMode');

      times(2, () => {
        sut.nativeElement.click();
        sut.detectChanges();
      });

      expect(activateEditMode).toHaveBeenCalledTimes(1);
    });

    it('should display the cancellation button for edit mode', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      const btn: HTMLButtonElement = sut.debugElement.query(
        By.css('[name=activate-read-only-mode]')
      ).nativeElement;
      expect(btn.hasAttribute('hidden')).toBe(false);
    });
  });

  describe('When the user leaves the edit mode', () => {
    it('should switch back to read only mode', () => {
      sut.nativeElement.click();

      const btn: HTMLButtonElement = sut.debugElement.query(
        By.css('[name=activate-read-only-mode]')
      ).nativeElement;

      btn.click();
      sut.detectChanges();

      expect(sut.componentInstance.mode).toBe(Mode.ReadOnly);
    });

    it('should switch back to read only mode', () => {
      sut.nativeElement.click();

      const btn: HTMLButtonElement = sut.debugElement.query(
        By.css('[name=activate-read-only-mode]')
      ).nativeElement;

      btn.click();
      sut.detectChanges();

      expect(btn.hasAttribute('hidden')).toBe(true);
    });
  });
});
