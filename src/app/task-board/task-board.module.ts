import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskQuickAddComponent } from './task-quick-add/task-quick-add.component';

@NgModule({
  declarations: [TaskQuickAddComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class TaskBoardModule {}
