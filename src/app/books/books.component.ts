import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  pageTitle: string = 'Book List';
  books: IBook[] = [];

  //cart: IBook[] = [];
  // addToCart(book: IBook): void {
  //   this.cart.push(book);
  //   console.log(this.cart);
  // }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
