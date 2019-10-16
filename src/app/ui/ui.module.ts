import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  exports: [
    ClarityModule,
    HeaderComponent
  ]
})
export class HomeflixUiModule { }
