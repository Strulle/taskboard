import { Component } from '@angular/core';

// <a [routerLink]="task.guid">Details</a>

@Component({
  selector: 'tb-root',
  template: `
    <h1 class="mat-h1 title">Kanban</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
