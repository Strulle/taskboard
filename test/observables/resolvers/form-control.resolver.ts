import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export function resolveFormControls<T extends object>(
  instance: T
): Observable<any>[] {
  return Object.getOwnPropertyNames(instance)
    .map(propertyName => instance[propertyName])
    .filter(property => property instanceof FormControl)
    .map((formControl: FormControl) => formControl.valueChanges);
}
