import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { EllipsisModule } from 'ngx-ellipsis';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieDetailsComponent
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
