import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TaskEditComponent } from './task-edit.component';

describe('<tb-task-edit>', () => {
  let sut: ComponentFixture<TaskEditComponent>;

  let titleControl: HTMLInputElement;
  let textControl: HTMLInputElement;
  let updateTrigger: HTMLButtonElement;

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

    updateTrigger = sut.debugElement.query(By.css('[name=update-btn]'))
      .nativeElement;
  });

  describe('When it is rendered', () => {
    it('should provide a text-box to edit the title of a task', () => {
      expect(titleControl).toBeDefined();
    });

    it('should provide a text-box to edit the text of a task', () => {
      expect(textControl).toBeDefined();
    });

    it('should provide an update button to emit updates of a task', () => {
      expect(updateTrigger).toBeDefined();
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

  describe('When a task has been changed', () => {
    it('should allow to emit the update', () => {
      const update = spyOn(sut.componentInstance.update, 'emit');

      titleControl.value = 'Buy Eggs';
      titleControl.dispatchEvent(new Event('input'));

      updateTrigger.click();
      sut.detectChanges();

      expect(update).toHaveBeenCalled();
    });
  });

  describe('When a task has NOT been changed', () => {
    it('should not emit the update', () => {
      const update = spyOn(sut.componentInstance.update, 'emit');

      titleControl.value = 'Buy Eggs';
      titleControl.dispatchEvent(new Event('input'));

      titleControl.value = 'Buy Milk';
      titleControl.dispatchEvent(new Event('input'));

      updateTrigger.click();
      sut.detectChanges();

      expect(update).not.toHaveBeenCalled();
    });
  });
});
