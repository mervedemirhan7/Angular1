//rota tanımlamamız için Routes servisi
import { Routes } from '@angular/router';

/** Navigasyon icin kullanacagimiz component lerin referanslari */
import { HomeComponent } from "app/home/home.component";
import { Sayfa1Component } from "app/sayfa1/sayfa1.component";
import { Sayfa2Component } from "app/sayfa2/sayfa2.component";
import { PaymentProfileComponent } from "app/payment-profile/payment-profile.component";




//rotalarımız
export const appRoutes: Routes = [
  // http://localhost:4200/
  {path: '', component: Sayfa1Component}, 
  // http://localhost:4200/sayfa1
  {path: 'sayfa1', component: Sayfa1Component},
  // http://localhost:4200/sayfa2
  {path: 'sayfa2', component: Sayfa2Component},
  // http://localhost:4200/kullanicilar/kullaniciID/profile/profileID
  {path: 'kullanicilar/:kullaniciID/profile/:profileID,', component: PaymentProfileComponent},
   // her hangi bir eşleşme olmaması durumunda
    {path: '**', component: Sayfa1Component},
 
];

