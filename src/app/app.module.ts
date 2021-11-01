import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { ScentsComponent } from './scents/scents.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ItemDetailComponent,
    SampleComponent,
    AboutComponent,
    ScentsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
      Title,
      Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
