import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FavouritesListComponent }
];

@NgModule({
  declarations: [FavouritesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavouritesModule {
}
