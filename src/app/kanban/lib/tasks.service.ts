import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { newGuid } from 'ts-guid';
import { Card, Task, TasksAggregate } from '../models';
import { TasksAggregateSubject } from './tasks-aggregate.subject';

@Injectable({ providedIn: 'root' })
export class Tasks {
  private endpoint = 'http://localhost:3000/tasks';
  private _tasks$$ = new TasksAggregateSubject();

  all$ = this._tasks$$.asObservable();

  constructor(private _http: HttpClient) {}

  getAll(): Observable<TasksAggregate> {
    return this._http.get<Task[]>(this.endpoint).pipe(
      map(tasks => ({
        items: tasks,
        count: tasks.length
      })),
      tap(projection => this._tasks$$.next(projection))
    );
  }

  create(card: Card): Observable<TasksAggregate> {
    const task = { guid: newGuid(), ...card };

    return this._http
      .post<void>(this.endpoint, task)
      .pipe(switchMap(() => this.getAll()));
  }

  remove(forRemoval: Task): Observable<TasksAggregate> {
    return this._http
      .delete<void>(`${this.endpoint}/${forRemoval.guid}`)
      .pipe(switchMap(() => this.getAll()));
  }

  favor(task: Task): Observable<TasksAggregate> {
    this.patchOptimistically(task.guid, { isFavorite: true });

    return this._http
      .put(`${this.endpoint}/favor/${task.guid}`, null)
      .pipe(switchMap(() => this.getAll()));
  }

  disfavor(task: Task): Observable<TasksAggregate> {
    this.patchOptimistically(task.guid, { isFavorite: false });

    return this._http
      .put(`${this.endpoint}/disfavor/${task.guid}`, null)
      .pipe(switchMap(() => this.getAll()));
  }

  private patchOptimistically(guid: string, patch: Partial<Task>) {
    const tasks = this._tasks$$.getValue();
    const optimisticUpdate = tasks.items.map(
      task => (task.guid === guid ? { ...task, ...patch } : task)
    );

    this._tasks$$.next({
      items: optimisticUpdate,
      count: optimisticUpdate.length
    });
  }
}
