import { Task } from './task';

export interface TasksProjection {
  items: Task[];
  count: number;
}
