import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newGuid } from 'ts-guid';
import { Card, Task, TasksProjection } from '../models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Tasks {
  private endpoint = 'http://localhost:3000/tasks';

  constructor(private _http: HttpClient) {}

  getAll(): Observable<TasksProjection> {
    return this._http.get<Task[]>(this.endpoint).pipe(
      map(tasks => ({
        items: tasks,
        count: tasks.length
      }))
    );
  }

  create(card: Card): Observable<void> {
    const task = { guid: newGuid(), ...card };

    return this._http.post<void>(this.endpoint, task);
  }

  remove(forRemoval: Task): Observable<void> {
    return this._http.delete<void>(`${this.endpoint}/${forRemoval.guid}`);
  }
}
