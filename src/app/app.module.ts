import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { BDServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    SummaryPipe,
    StructureDirectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BDServices,
    ItshareApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
