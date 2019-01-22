import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { times } from '@test';
import { Mode } from '../models/mode';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskViewComponent } from '../task-view/task-view.component';
import { TaskCardComponent } from './task-card.component';
import { TaskCardInteractions } from './task-card.component.interactions';

describe('<tb-task-card>', () => {
  let sut: TaskCardInteractions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCardComponent, TaskEditComponent, TaskViewComponent],
      imports: [ReactiveFormsModule]
    });
    const fixture = TestBed.createComponent(TaskCardComponent);
    sut = new TaskCardInteractions(fixture);

    sut.componentInstance.task = {
      title: 'Buy Milk',
      text: 'Norma Tennenlohe'
    };

    sut.detectChanges();
  }));

  describe('When it is created', () => {
    it('should be in read only mode', () => {
      expect(sut.componentInstance.state).toBe(Mode.ReadOnly);
    });

    it('should hide the cancellation button for edit mode', () => {
      expect(sut.leaveEditModeButton.hasAttribute('hidden')).toBe(true);
    });

    it('should show the view template', () => {
      expect(sut.viewTemplate.hasAttribute('hidden')).toBe(false);
    });

    it('should hide the edit template', () => {
      expect(sut.editTemplate.hasAttribute('hidden')).toBe(true);
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

      times(2, () => sut.nativeElement.click());

      expect(activateEditMode).toHaveBeenCalledTimes(1);
    });

    it('should display the cancellation button for edit mode', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      expect(sut.leaveEditModeButton.hasAttribute('hidden')).toBe(false);
    });

    it('should display the edit template', () => {
      sut.nativeElement.click();
      expect(sut.editTemplate).toBeDefined();
    });

    it('should hide the view template', () => {
      sut.nativeElement.click();
      sut.detectChanges();

      expect(sut.viewTemplate.hasAttribute('hidden')).toBe(true);
    });
  });

  describe('When the user leaves the edit mode', () => {
    it('should switch back to read only mode', () => {
      sut.nativeElement.click();
      sut.leaveEditModeButton.click();

      expect(sut.componentInstance.state).toBe(Mode.ReadOnly);
    });

    it('should hide button leaving edit mode', () => {
      sut.nativeElement.click();
      sut.leaveEditModeButton.click();

      expect(sut.leaveEditModeButton.hasAttribute('hidden')).toBe(true);
    });
  });
});
