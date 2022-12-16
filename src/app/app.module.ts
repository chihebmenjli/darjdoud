import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import {RouterOutlet} from "@angular/router";

import {AppRoutingModule} from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    Home2Component,
    Home3Component,
    Home4Component,
    HeaderComponent,
    Header2Component,
    Header3Component,
    Header4Component,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
