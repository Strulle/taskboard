import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskQuickAddComponent } from './task-quick-add/task-quick-add.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { BoardComponent } from './board.component';

@NgModule({
  declarations: [
    TaskQuickAddComponent,
    TaskCardComponent,
    TaskEditComponent,
    TaskViewComponent,
    BoardComponent
  ],
  imports: [CommonModule, ReactiveFormsModule]
})
export class TaskBoardModule {}
