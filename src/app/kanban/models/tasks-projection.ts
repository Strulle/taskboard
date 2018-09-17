import { Task } from './task';

export interface TasksAggregate {
  items: Task[];
  count: number;
}
