import { Component, Input } from '@angular/core';
import { IBook } from '../interfaces/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: IBook = {} as IBook;
}
