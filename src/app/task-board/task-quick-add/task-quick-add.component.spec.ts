import { subscriptions } from '@test';
import { TaskQuickAddComponent } from './task-quick-add.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('<tb-task-quick-add>', () => {
  let sut: TaskQuickAddComponent;
  let output: jest.SpyInstance<(value?: {}) => void>;

  describe('unit tests', () => {
    beforeEach(() => {
      sut = new TaskQuickAddComponent();
      sut.ngOnInit();

      output = jest.spyOn(sut.create, 'emit');
    });

    describe('When no title is given', () => {
      it.each([null, undefined, '', ' '])(
        'should not emit a draft for the task ("%s")',
        notAValue => {
          sut.title.setValue(notAValue);
          expect(output).not.toBeCalled();
        }
      );
    });

    describe('When title is given', () => {
      it('should emit a draft for the task', () => {
        sut.title.setValue('a');
        expect(output).toBeCalled();
      });
    });
  });

  describe('template tests', () => {
    let fixture: ComponentFixture<TaskQuickAddComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TaskQuickAddComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TaskQuickAddComponent);
      sut = fixture.componentInstance;

      fixture.detectChanges();
    });

    describe('When no title is entered', () => {
      it('should have a disabled creation button', () => {
        sut.title.setValue('');
        const button: HTMLButtonElement = fixture.debugElement.query(
          By.css('button')
        ).nativeElement;

        expect(button.disabled).toBe(true);
      });
    });
  });

  afterEach(() => subscriptions(sut).verify());
});
