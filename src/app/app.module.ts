import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { MessageService } from './shared/message-service'

@NgModule({
  declarations: [
    AppComponent,
    ProductBoxComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
