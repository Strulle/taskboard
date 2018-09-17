import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-board',
  template: `
   <h1 class="mat-h1">Kanban</h1>
   <tb-describe-card></tb-describe-card>
  `
})
export class BoardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
