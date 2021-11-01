import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePage} from './pages/home/home';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {checkApi} from "./interceptor/check-api.interceptor";
import {AppMaterialModule} from "./app-material/app-material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: checkApi,
      deps: [HttpClient],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
