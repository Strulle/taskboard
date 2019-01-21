import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mode } from '../models/mode';
import { TaskCardComponent } from './task-card.component';
import { times } from '@test';

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
  });
});
