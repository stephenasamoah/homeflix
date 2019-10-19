import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { FooteristicLayoutComponent } from './footeristic-layout/footeristic-layout.component';
import { RouterModule } from '@angular/router';
import { HomeflixUiModule } from '../ui.module';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    FooteristicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeflixUiModule
  ],
  exports: [
    DashboardLayoutComponent,
    FooteristicLayoutComponent
  ]
})
export class LayoutModule {
}
