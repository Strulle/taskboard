import { Observable } from 'rxjs';
import { OpenSubscriptionError } from './errors';

export type ObservableInspect<T> = Observable<T> & { observers?: any[] };

export function observers(observables: ObservableInspect<any>[]) {
  return {
    verify() {
      const unhandledSubscriptions = observables
        .map((observable, index) =>
          observable.observers.length > 0
            ? new OpenSubscriptionError(index)
            : null
        )
        .filter(error => !!error);

      if (unhandledSubscriptions.length > 0) {
        throw new Error(unhandledSubscriptions.join('\n'));
      }
    }
  };
}
