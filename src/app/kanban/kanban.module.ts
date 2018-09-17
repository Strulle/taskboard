import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { BoardComponent } from './board.component';
import { DescribeCardComponent } from './describe-card/describe-card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [BoardComponent, DescribeCardComponent],
  exports: [BoardComponent]
})
export class KanbanModule {}
