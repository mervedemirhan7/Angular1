import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Sayfa1Component } from './sayfa1/sayfa1.component';
import { Sayfa2Component } from './sayfa2/sayfa2.component';

//rota ayarlarımız
import { appRoutes  } from './app.routes';
import { PaymentProfileComponent } from './payment-profile/payment-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Sayfa1Component,
    Sayfa2Component,
    PaymentProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
