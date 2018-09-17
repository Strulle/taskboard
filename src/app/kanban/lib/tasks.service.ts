import { Injectable } from '@angular/core';
import { Card } from '../models';

@Injectable({ providedIn: 'root' })
export class Tasks {
  private _tasks: Card[] = [];

  constructor() {}

  getAll(): Card[] {
    return this._tasks;
  }

  create(card: Card): void {
    this._tasks = [...this._tasks, card];
  }
}
