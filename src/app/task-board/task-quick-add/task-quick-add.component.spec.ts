import { TaskQuickAddComponent } from './task-quick-add.component';

describe('<tb-task-quick-add>', () => {
  describe('When no title is given', () => {
    it.each([null, undefined, '', ' '])(
      'should not emit a draft for the task ("%s")',
      notAValue => {
        const sut = new TaskQuickAddComponent();
        const output = jest.spyOn(sut.create, 'emit');

        sut.title.setValue(notAValue);
        expect(output).not.toBeCalled();
      }
    );
  });

  describe('When title is given', () => {
    it('should emit a draft for the task', () => {
      const sut = new TaskQuickAddComponent();
      const output = jest.spyOn(sut.create, 'emit');

      sut.title.setValue('a');
      expect(output).toBeCalled();
    });
  });
});
