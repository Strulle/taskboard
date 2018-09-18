import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { BoardComponent } from './board.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CompleteTaskButtonComponent } from './complete-task-button/complete-task-button.component';
import { DescribeCardComponent } from './describe-card/describe-card.component';
import { DoingListComponent } from './doing-list/doing-list.component';
import { FavoriteToggleButtonComponent } from './favorite-toggle-button/favorite-toggle-button.component';
import { Highlight } from './lib/highlight.pipe';
import { ProcessTaskButtonComponent } from './process-task-button/process-task-button.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ToggleCardFormComponent } from './toggle-card-form/toggle-card-form.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    BoardComponent,
    DescribeCardComponent,
    CardListComponent,
    CardComponent,
    ToggleCardFormComponent,
    FavoriteToggleButtonComponent,
    CompleteTaskButtonComponent,
    ProcessTaskButtonComponent,
    DoingListComponent,
    TodoListComponent,
    Highlight,
    EditTaskComponent
  ],
  exports: [BoardComponent]
})
export class KanbanModule {}
