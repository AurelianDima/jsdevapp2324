import { ArticolComponent } from './articol/articol.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    HomeComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    ArticolComponent,
    FormsModule
  ],
  providers: [],
  
  
})
export class AppModule { }