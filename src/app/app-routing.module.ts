import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from './api/_enums/enum.common';

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  {
    path: 'browse',
    loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule),
    data: { layout: Layouts.Dashboard }
  },
  {
    path: 'favourites',
    loadChildren: () => import('./containers/favourites/favourites.module').then(m => m.FavouritesModule),
    data: { layout: Layouts.Dashboard }
  },
  {
    path: 'auth',
    loadChildren: () => import('./containers/auth/auth.module').then(m => m.AuthModule),
    data: { layout: Layouts.Footeristic }
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
