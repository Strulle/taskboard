import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [CommonModule],
  exports: [SearchBoxComponent]
})
export class SearchModule {}
