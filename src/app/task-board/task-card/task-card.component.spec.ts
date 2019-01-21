import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mode } from '../models/mode';
import { TaskCardComponent } from './task-card.component';

describe('<tb-task-card>', () => {
  describe('When it is created', () => {
    let sut: ComponentFixture<TaskCardComponent>;

    it('should be in read only mode', () => {
      TestBed.configureTestingModule({ declarations: [TaskCardComponent] });
      sut = TestBed.createComponent(TaskCardComponent);

      expect(sut.componentInstance.mode).toBe(Mode.ReadOnly);
    });
  });
});
