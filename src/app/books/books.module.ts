import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookComponent } from '../books/book/book.component';



@NgModule({
  declarations: [BooksComponent,BookComponent],
  imports: [
    CommonModule, MatCardModule,MatButtonModule,MatIconModule
  ],
  providers:[BooksService],
  exports:[BooksComponent],
})
export class BooksModule { }
