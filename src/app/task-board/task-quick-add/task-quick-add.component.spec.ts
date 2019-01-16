import { TaskQuickAddComponent } from './task-quick-add.component';

describe('<tb-task-quick-add>', () => {
  describe('When no title is given', () => {
    it('should not emit a draft for the task', () => {
      const sut = new TaskQuickAddComponent();
      const output = jest.spyOn(sut.create, 'emit');

      sut.title.setValue('');
      expect(output).not.toBeCalled();
    });
  });
});
