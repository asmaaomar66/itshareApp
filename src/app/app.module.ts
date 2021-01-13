import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { BDServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BDServices,
    ItshareApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
