import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(tasks: Task[], query?: string): Task[] {
    if (!tasks || !Array.isArray(tasks) || !query) {
      return tasks;
    }

    return tasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
