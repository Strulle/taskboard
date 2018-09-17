import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { DescribeCardComponent } from './describe-card/describe-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BoardComponent, DescribeCardComponent],
  exports: [BoardComponent]
})
export class KanbanModule {}
