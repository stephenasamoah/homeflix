import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopularListComponent } from './popular-list/popular-list.component';
import { HomeflixUiModule } from '../../ui/ui.module';

const routes: Routes = [
  { path: '', component: PopularListComponent }
];

@NgModule({
  declarations: [PopularListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeflixUiModule
  ],
  exports: [RouterModule]
})
export class HomeModule {
}
