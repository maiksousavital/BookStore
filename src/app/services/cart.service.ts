import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IBook[] = [];
  constructor() {}

  add(book: IBook): void {
    this.cart.push(book);
    console.log(this.cart)
  }

  remove(book: IBook):void{
    let index = this.cart.indexOf(book);
    this.cart.splice(index,1);
    console.log(this.cart)
  }

  get(): IBook[]{
    return this.cart;
  }

}
