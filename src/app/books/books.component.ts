import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  pageTitle: string = 'Book List';

  books: IBook[] = [
    {
      Name: 'Clean Code',
      Author: 'Robert C. Martin ',
      Image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      Price: 50,
    },
  ];

  ngOnInit(): void {}
}
