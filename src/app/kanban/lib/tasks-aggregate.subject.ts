import { BehaviorSubject } from 'rxjs';
import { TasksAggregate, Task } from '../models';

export class TasksAggregateSubject extends BehaviorSubject<TasksAggregate> {
  constructor(items: Task[] = [], count = 0) {
    super({ items, count });
  }
}
