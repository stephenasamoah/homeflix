import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeflixUiModule } from '../../ui/ui.module';

const routes: Routes = [
  { path: '', component: MovieListComponent }
];

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeflixUiModule
  ],
  exports: [RouterModule]
})
export class HomeModule {
}