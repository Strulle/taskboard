import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TaskViewComponent } from './task-view.component';

describe('<tb-task-view>', () => {
  let sut: ComponentFixture<TaskViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskViewComponent]
    }).compileComponents();

    sut = TestBed.createComponent(TaskViewComponent);

    sut.componentInstance.task = {
      title: 'Buy Milk',
      text: 'Norma Tennenlohe'
    };

    sut.detectChanges();
  }));

  describe('When it is created', () => {
    it('should display the title of the task', () => {
      const title = sut.debugElement.query(By.css('[name=task-title]'))
        .nativeElement;

      expect(title).toMatchSnapshot();
    });

    it('should display the description of the task', () => {
      const text = sut.debugElement.query(By.css('[name=task-text]'))
        .nativeElement;

      expect(text).toMatchSnapshot();
    });
  });
});
