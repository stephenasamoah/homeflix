import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { EllipsisModule } from 'ngx-ellipsis';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    EllipsisModule
  ],
  exports: [
    ClarityModule,
    HeaderComponent,
    EllipsisModule,
    MovieDetailsComponent
  ]
})
export class HomeflixUiModule {
}
