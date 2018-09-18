import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'highlight' })
export class Highlight implements PipeTransform {
  transform(value: string, query: string): string {
    if (!value || !query) {
      return value;
    }

    const searchPattern = new RegExp(`(${query})`, 'i');
    const [, found] = searchPattern.exec(value);

    return !!found ? value.replace(found, `<mark>${found}</mark>`) : value;
  }
}
