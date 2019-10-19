import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeflixUiModule } from './ui/ui.module';
import { StorageModule } from '@ngx-pwa/local-storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResponseInterceptor } from './api/_services/interceptors/response.interceptor.service';
import { LayoutModule } from './ui/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeflixUiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
