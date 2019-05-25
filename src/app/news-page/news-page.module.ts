import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsPageComponent],
  exports: [NewsPageComponent]
})
export class NewsPageModule { }
