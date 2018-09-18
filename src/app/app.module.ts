import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './kanban/board.component';
import { EditTaskComponent } from './kanban/edit-task/edit-task.component';
import { KanbanModule } from './kanban/kanban.module';

// localhost:4200
// localhost:4200/423423-2434-23-4234

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BoardComponent,
        pathMatch: 'full'
      },
      {
        path: ':guid',
        component: EditTaskComponent
      }
    ]),
    KanbanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
