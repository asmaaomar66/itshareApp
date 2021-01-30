import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { BDServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { CustomDirectivesDirective } from './custom-directives.directive';
import { CustomFormsModule } from 'ng2-validation';
import {HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatrialComponent } from './matrial/matrial.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    SummaryPipe,
    CustomDirectivesDirective,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LogInComponent,
    MatrialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports : [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    BDServices,
    ItshareApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
