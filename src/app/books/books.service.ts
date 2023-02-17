import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/Book';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks(): IBook[] {
    return [
      {
        Name: 'Clean Code',
        Author: 'Robert C. Martin ',
        Image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        Price: 50,
      },
      {
        Name: 'Domain-Driven Design',
        Author: 'Eric Evans',
        Image:
          'https://m.media-amazon.com/images/P/0321125215.01._SCLZZZZZZZ_SX500_.jpg',
        Price: 54,
      },
    ];
  }
}
