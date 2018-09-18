import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap, filter, scan } from 'rxjs/operators';
import { newGuid } from 'ts-guid';
import { Card, Task, TasksAggregate } from '../models';
import { TasksAggregateSubject } from './tasks-aggregate.subject';

@Injectable({ providedIn: 'root' })
export class Tasks {
  private endpoint = 'http://localhost:3000/tasks';
  private _tasks$$ = new TasksAggregateSubject();

  todo$ = this._todo();
  doing$ = this._doing();
  done$ = this._done();

  constructor(private _http: HttpClient) {}

  getAll(): Observable<TasksAggregate> {
    return this._http.get<Task[]>(this.endpoint).pipe(
      map(tasks => new TasksAggregate(tasks)),
      tap(projection => this._tasks$$.next(projection))
    );
  }

  create(card: Card): Observable<TasksAggregate> {
    const task = { guid: newGuid(), ...card };

    return this._http
      .post<void>(this.endpoint, task)
      .pipe(switchMap(() => this.getAll()));
  }

  proceed(task: Task): Observable<TasksAggregate> {
    task.isInProgress = true;
    task.isComplete = false;

    return this._http
      .post<void>(this.endpoint, task)
      .pipe(switchMap(() => this.getAll()));
  }

  complete(task: Task): Observable<TasksAggregate> {
    task.isInProgress = false;
    task.isComplete = true;

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

    this._tasks$$.next(new TasksAggregate(optimisticUpdate));
  }

  private _todo() {
    return this._tasks$$.asObservable().pipe(
      map(aggregate => {
        const todos = aggregate.items.filter(
          task => task.isComplete === false && task.isInProgress === false
        );
        return {
          items: todos,
          count: todos.length
        };
      })
    );
  }

  private _doing() {
    return this._tasks$$.asObservable().pipe(
      map(aggregate => {
        const doing = aggregate.items.filter(
          task => task.isComplete === false && task.isInProgress === true
        );
        return {
          items: doing,
          count: doing.length
        };
      })
    );
  }

  private _done() {
    return this._tasks$$.asObservable().pipe(
      map(aggregate => {
        const done = aggregate.items.filter(
          task => task.isComplete === true && task.isInProgress === false
        );
        return {
          items: done,
          count: done.length
        };
      })
    );
  }
}
