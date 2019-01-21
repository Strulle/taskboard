import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { times } from '@test';
import { Mode } from '../models/mode';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskViewComponent } from '../task-view/task-view.component';
import { TaskCardComponent } from './task-card.component';

describe('<tb-task-card>', () => {
  let sut: ComponentFixture<TaskCardComponent>;
  let leaveEditModeButton: () => HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCardComponent, TaskEditComponent, TaskViewComponent]
    });
    sut = TestBed.createComponent(TaskCardComponent);

    sut.componentInstance.task = {
      title: 'Buy Milk',
      text: 'Norma Tennenlohe'
    };

    leaveEditModeButton = () =>
      sut.debugElement.query(By.css('[name=activate-read-only-mode]'))
        .nativeElement;

    sut.detectChanges();
  }));

  describe('When it is created', () => {
    it('should be in read only mode', () => {
      expect(sut.componentInstance.state).toBe(Mode.ReadOnly);
    });

    it('should hide the cancellation button for edit mode', () => {
      expect(leaveEditModeButton().hasAttribute('hidden')).toBe(true);
    });

    it('should display the view template', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      expect(
        sut.debugElement.query(By.css('tb-task-view')).nativeElement
      ).toBeDefined();
    });
  });

  describe('When it is clicked', () => {
    it('should switch to edit mode', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      expect(sut.componentInstance.state).toBe(Mode.Edit);
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

      expect(leaveEditModeButton().hasAttribute('hidden')).toBe(false);
    });

    it('should display the edit template', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      expect(
        sut.debugElement.query(By.css('tb-task-edit')).nativeElement
      ).toBeDefined();
    });
  });

  describe('When the user leaves the edit mode', () => {
    it('should switch back to read only mode', () => {
      sut.nativeElement.click();

      leaveEditModeButton().click();
      sut.detectChanges();

      expect(sut.componentInstance.state).toBe(Mode.ReadOnly);
    });

    it('should hide button leaving edit mode', () => {
      sut.nativeElement.click();

      leaveEditModeButton().click();
      sut.detectChanges();

      expect(leaveEditModeButton().hasAttribute('hidden')).toBe(true);
    });
  });
});
