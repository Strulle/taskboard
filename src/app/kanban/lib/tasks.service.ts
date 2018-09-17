import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, empty, of } from 'rxjs';
import { newGuid } from 'ts-guid';
import { Card, Task, TasksProjection } from '../models';
import { map, tap, switchMap, switchMapTo } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Tasks {
  private endpoint = 'http://localhost:3000/tasks';

  private _tasks$$ = new BehaviorSubject<TasksProjection>({
    items: [],
    count: 0
  });

  all$ = this._tasks$$.asObservable();

  constructor(private _http: HttpClient) {}

  getAll(): Observable<TasksProjection> {
    return this._http.get<Task[]>(this.endpoint).pipe(
      map(tasks => ({
        items: tasks,
        count: tasks.length
      })),
      tap(projection => this._tasks$$.next(projection))
    );
  }

  create(card: Card): Observable<TasksProjection> {
    const task = { guid: newGuid(), ...card };

    return this._http
      .post<void>(this.endpoint, task)
      .pipe(switchMap(() => this.getAll()));
  }

  remove(forRemoval: Task): Observable<TasksProjection> {
    return this._http
      .delete<void>(`${this.endpoint}/${forRemoval.guid}`)
      .pipe(switchMap(() => this.getAll()));
  }

  favor(task: Task): Observable<TasksProjection> {
    const tasks = this._tasks$$.getValue();

    const optimisticUpdate = tasks.items.map(t => {
      return t.guid === task.guid ? { ...t, isFavorite: true } : t;
    });

    this._tasks$$.next({
      items: optimisticUpdate,
      count: optimisticUpdate.length
    });

    return this._http
      .put(`${this.endpoint}/favor/${task.guid}`, null)
      .pipe(switchMap(() => this.getAll()));
  }

  disfavor(task: Task): Observable<TasksProjection> {
    return this._http
      .put(`${this.endpoint}/disfavor/${task.guid}`, null)
      .pipe(switchMap(() => this.getAll()));
  }
}
