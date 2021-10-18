import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import {MatButtonModule} from "@angular/material/button";
import { StorePageComponent } from './component/store-page/store-page.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoffeeService} from "./service/coffee.service";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import { CheckOrderComponent } from './component/check-order/check-order.component';
import {OrderService} from "./service/order.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    StorePageComponent,
    ProductPageComponent,
    CheckOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  providers: [
    CoffeeService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
