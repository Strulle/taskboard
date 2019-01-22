import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BoardComponent } from './task-board/board.component';

export const routes: Route[] = [
  { path: '', component: BoardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
