import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BooksModule } from './books/books.module';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatCardModule,
    // MatButtonModule,
    // MatIconModule,    
    BooksModule,
    AppRoutingModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
