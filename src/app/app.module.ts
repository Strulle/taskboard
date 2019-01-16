import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskBoardModule } from './task-board/task-board.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskBoardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
