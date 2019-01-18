import { FormControl } from '@angular/forms';
import { ObservableProperty } from './observable-property';

export function resolveFormControls<T extends object>(
  instance: T
): ObservableProperty<unknown>[] {
  return Object.getOwnPropertyNames(instance)
    .map(name => ({ name, observable: instance[name] }))
    .filter(property => property.observable instanceof FormControl)
    .map(property => ({
      name: `${property.name}.valueChanges`,
      observable: property.observable.valueChanges
    }));
}
