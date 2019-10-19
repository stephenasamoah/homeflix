import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { EllipsisModule } from 'ngx-ellipsis';
import { MovieDetailsComponent } from './dumb/movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './dumb/movie-list/movie-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieDetailsComponent,
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    EllipsisModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ClarityModule,
    HeaderComponent,
    EllipsisModule,
    MovieDetailsComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeflixUiModule {
}
