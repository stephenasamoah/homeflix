import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';

const routes: Routes = [
  { path: '', component: FavouritesListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavouritesRoutingModule {
}
