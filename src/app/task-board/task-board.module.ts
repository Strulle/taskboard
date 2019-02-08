import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';
import { BoardComponent } from './board.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskQuickAddComponent } from './task-quick-add/task-quick-add.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { FilterPipe } from './lib/pipes/filter.pipe';

@NgModule({
  declarations: [
    TaskQuickAddComponent,
    TaskCardComponent,
    TaskEditComponent,
    TaskViewComponent,
    BoardComponent,
    FilterPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, SearchModule]
})
export class TaskBoardModule {}
