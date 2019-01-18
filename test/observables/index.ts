import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { resolveFormControls, resolveObservableProperties } from './resolvers';
import { OpenSubscriptionError } from '@test';
import { ObservableProperty } from './resolvers/observable-property';

export type ObservableInspect<T> = Observable<T> & { observers?: any[] };

export function subscriptions<T extends object>(instance: T) {
  const ngOnDestroy =
    (instance as OnDestroy).ngOnDestroy.bind(instance) || (() => {});

  const observables = [
    ...resolveFormControls(instance),
    ...resolveObservableProperties(instance)
  ];

  return {
    verify: () => verify(instance.constructor.name, ngOnDestroy, observables)
  };
}

function verify(
  className: string,
  ngOnDestroy: () => void,
  observables: ObservableProperty<unknown>[]
) {
  ngOnDestroy();

  const unhandledSubscriptions = findUnhandledSubscriptions(observables);

  if (unhandledSubscriptions.length === 0) {
    return;
  }

  throw new Error(
    `● ${className} › ${unhandledSubscriptions
      .map(err => err.message)
      .join('\n')}`
  );
}

function findUnhandledSubscriptions(
  observableProperties: ObservableProperty<unknown>[]
): OpenSubscriptionError[] {
  return observableProperties
    .map(property =>
      !!(property.observable as any).observers &&
      (property.observable as any).observers.length > 0
        ? new OpenSubscriptionError(property.name)
        : null
    )
    .filter(error => !!error);
}
