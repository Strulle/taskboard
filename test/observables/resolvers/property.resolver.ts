import { Observable } from 'rxjs';

export function resolveObservableProperties<T extends object>(
  instance: T
): Observable<any>[] {
  return Object.getOwnPropertyNames(instance)
    .map(propertyName => instance[propertyName])
    .filter(property => property instanceof Observable);
}
