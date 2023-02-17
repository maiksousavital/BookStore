import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IBook } from '../../interfaces/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: IBook = {} as IBook;

  isInCart: boolean = false;
  //@Output() bookEmitter = new EventEmitter<IBook>(); send information to parent component

  constructor(private cartService: CartService){}

  addToCart(): void {
    //this.bookEmitter.emit(this.book);
    this.cartService.add(this.book)
    this.isInCart = true;
  }

  removeFromCart():void{
    this.cartService.remove(this.book);
    this.isInCart = false;
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
