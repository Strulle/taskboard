import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'tb-card-list',
  template: `
    <h4>{{ title }}</h4>
    <tb-card
      [content]="card"
      *ngFor="let card of cards">
    </tb-card>
  `
})
export class CardListComponent {
  @Input()
  title: string;

  @Input()
  cards: Card[];
}
