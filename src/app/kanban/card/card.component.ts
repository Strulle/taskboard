import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'tb-card',
  template: `
    <h4 class="title">{{ content.title }}</h4>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  content: Card;
}
