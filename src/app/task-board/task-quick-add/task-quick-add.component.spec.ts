import { subscriptions } from '@test';
import { TaskQuickAddComponent } from './task-quick-add.component';

describe('<tb-task-quick-add>', () => {
  let sut: TaskQuickAddComponent;
  let output: jest.SpyInstance<(value?: {}) => void>;

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

  afterEach(() => subscriptions(sut).verify());
});
