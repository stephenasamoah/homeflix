import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeflixUiModule } from './ui/ui.module';
import { StorageModule } from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeflixUiModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
