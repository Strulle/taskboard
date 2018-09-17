import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { KanbanModule } from "./kanban/kanban.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, KanbanModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
