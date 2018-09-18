import { Component } from '@angular/core';

// <a [routerLink]="task.guid">Details</a>

@Component({
  selector: 'tb-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
