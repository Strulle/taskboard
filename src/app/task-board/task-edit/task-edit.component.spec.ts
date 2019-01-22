import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TaskEditComponent } from './task-edit.component';

describe('<tb-task-edit>', () => {
  let sut: ComponentFixture<TaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEditComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    sut = TestBed.createComponent(TaskEditComponent);
    sut.componentInstance.task = { title: 'Buy Milk' };
    sut.detectChanges();
  });

  describe('When it is rendered', () => {
    it('should provide a text-box to edit the title of a task', () => {
      const input: HTMLInputElement = sut.debugElement.query(
        By.css('[name=title-input]')
      ).nativeElement;

      expect(input).toBeDefined();
    });

    it('should provide a text-box to edit the text of a task', () => {
      const input: HTMLInputElement = sut.debugElement.query(
        By.css('[name=text-input]')
      ).nativeElement;

      expect(input).toBeDefined();
    });
  });

  describe('When a task is provided', () => {
    it('it should display the title', () => {
      const input: HTMLInputElement = sut.debugElement.query(
        By.css('[name=title-input]')
      ).nativeElement;

      expect(input.value).toBe(sut.componentInstance.task.title);
    });

    // it('it should display the text' , () => {

    // });
  });
});
