import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { BodyCategoriesComponent } from './body-categories/body-categories.component';
import { NewsComponent } from './news/news.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { HomeComponent } from './home/home.component';
import { EconomiaComponent } from './economia/economia.component';
import { CienciaComponent } from './ciencia/ciencia.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoriesComponent,
    BodyCategoriesComponent,
    NewsComponent,
    AdminFormComponent,
    HomeComponent,
    EconomiaComponent,
    CienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
