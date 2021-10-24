import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { ScentsComponent } from './scents/scents.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'scents', component: ScentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
