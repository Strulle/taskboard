import { Observable } from 'rxjs';
import { ObservableProperty } from './observable-property';

export function resolveObservableProperties<T extends object>(
  instance: T
): ObservableProperty<unknown>[] {
  return Object.getOwnPropertyNames(instance)
    .map(name => ({ name, observable: instance[name] }))
    .filter(property => property.observable instanceof Observable);
}
