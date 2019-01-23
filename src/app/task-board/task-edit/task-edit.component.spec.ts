import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TaskEditComponent } from './task-edit.component';

describe('<tb-task-edit>', () => {
  let sut: ComponentFixture<TaskEditComponent>;

  let titleControl: HTMLInputElement;
  let textControl: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEditComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    sut = TestBed.createComponent(TaskEditComponent);
    sut.componentInstance.task = {
      title: 'Buy Milk',
      text: 'Norma Tennenlohe'
    };
    sut.detectChanges();

    titleControl = sut.debugElement.query(By.css('[name=title-input]'))
      .nativeElement;

    textControl = sut.debugElement.query(By.css('[name=text-input]'))
      .nativeElement;
  });

  describe('When it is rendered', () => {
    it('should provide a text-box to edit the title of a task', () => {
      expect(titleControl).toBeDefined();
    });

    it('should provide a text-box to edit the text of a task', () => {
      expect(textControl).toBeDefined();
    });
  });

  describe('When a task is provided', () => {
    it('it should display the title', () => {
      expect(titleControl.value).toBe(sut.componentInstance.task.title);
    });

    it('it should display the text', () => {
      expect(textControl.value).toBe(sut.componentInstance.task.text);
    });
  });

  describe('When task ');
});
