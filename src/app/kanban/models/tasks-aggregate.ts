import { Task } from './task';

export class TasksAggregate {
  count = this.items.length;

  constructor(public items: Task[] = []) {}
}
