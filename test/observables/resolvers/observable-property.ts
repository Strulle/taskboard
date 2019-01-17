import { Observable } from 'rxjs';

export interface ObservableProperty<T> {
  name: string;
  observable: Observable<T>;
}
