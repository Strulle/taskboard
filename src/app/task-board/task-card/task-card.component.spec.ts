import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mode } from '../models/mode';
import { TaskCardComponent } from './task-card.component';

describe('<tb-task-card>', () => {
  let sut: ComponentFixture<TaskCardComponent>;

  describe('When it is created', () => {
    it('should be in read only mode', () => {
      TestBed.configureTestingModule({ declarations: [TaskCardComponent] });
      sut = TestBed.createComponent(TaskCardComponent);

      expect(sut.componentInstance.mode).toBe(Mode.ReadOnly);
    });
  });

  describe('When it is clicked', () => {
    it('should switch to edit mode', () => {
      TestBed.configureTestingModule({ declarations: [TaskCardComponent] });
      sut = TestBed.createComponent(TaskCardComponent);

      sut.componentInstance.ngAfterViewInit();
      sut.debugElement.nativeElement.click();
      sut.detectChanges();

      expect(sut.componentInstance.mode).toBe(Mode.Edit);
    });

    it('should not accept clicks if edit mode is active', () => {
      TestBed.configureTestingModule({ declarations: [TaskCardComponent] });
      sut = TestBed.createComponent(TaskCardComponent);

      const editActivation = spyOn(sut.componentInstance, 'activateEditMode');

      sut.debugElement.nativeElement.click();
      sut.detectChanges();

      sut.debugElement.nativeElement.click();
      sut.detectChanges();

      expect(editActivation).toHaveBeenCalledTimes(1);
    });
  });
});
