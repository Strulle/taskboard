import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tb-favorite-toggle-button',
  templateUrl: './favorite-toggle-button.component.html'
})
export class FavoriteToggleButtonComponent {
  @Input()
  isFavorite = false;

  @Output()
  favor = new EventEmitter<void>();

  @Output()
  disfavor = new EventEmitter<void>();
}
