import { PipeTransform, Pipe } from '@angular/core';
import { Task } from '../models';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'highlight' })
export class Highlight implements PipeTransform {
  transform(task: Task, query: string): Task {
    if (!task || !query) {
      return task;
    }

    const searchPattern = new RegExp(`(${query})`, 'i');
    const [, found = ''] = searchPattern.exec(task.title) || [];

    return !!found
      ? {
          ...task,
          title: task.title.replace(found, `<mark>${found}</mark>`)
        }
      : task;
  }
}
