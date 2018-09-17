import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newGuid } from 'ts-guid';
import { Card, Task } from '../models';

@Injectable({ providedIn: 'root' })
export class Tasks {
  private _tasks: Task[] = [];

  constructor(private _http: HttpClient) {}

  getAll(): Card[] {
    this._http
      .get('http://localhost:3000/tasks')
      .subscribe(ts => console.log(ts));

    return this._tasks;
  }

  create(card: Card): void {
    const task = { guid: newGuid(), ...card };

    this._tasks = [...this._tasks, task];
  }

  remove(forRemoval: Task): void {
    this._tasks = this._tasks.filter(task => task.guid !== forRemoval.guid);
  }
}
