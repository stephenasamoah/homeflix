import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ClarityModule,
  ]
})
export class MiniNetflixUiModule { }
