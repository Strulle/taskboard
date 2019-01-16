import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { resolveFormControls, resolveObservableProperties } from './resolvers';
import { OpenSubscriptionError } from '@test/errors';

export type ObservableInspect<T> = Observable<T> & { observers?: any[] };

export function subscriptions<T extends object>(instance: T) {
  const ngOnDestroy =
    (instance as OnDestroy).ngOnDestroy.bind(instance) || (() => {});

  const observables = [
    ...resolveFormControls(instance),
    ...resolveObservableProperties(instance)
  ];

  return { verify: () => verify(ngOnDestroy, observables) };
}

function verify(ngOnDestroy: () => void, observables: Observable<unknown>[]) {
  ngOnDestroy();

  const unhandledSubscriptions = findUnhandledSubscriptions(observables);

  if (unhandledSubscriptions.length === 0) {
    return;
  }

  throw new Error(unhandledSubscriptions.map(err => err.message).join('\n'));
}

function findUnhandledSubscriptions(
  observables: ObservableInspect<unknown>[]
): OpenSubscriptionError[] {
  return observables
    .map((observable, index) =>
      !!observable.observers && observable.observers.length > 0
        ? new OpenSubscriptionError(index)
        : null
    )
    .filter(error => !!error);
}
