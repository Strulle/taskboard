import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { TaskBoardModule } from './task-board/task-board.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskBoardModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
