import { Component } from '@angular/core';

@Component({
  selector: 'tb-root',
  template: `
    <h1 class="title">Kanban</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
