import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id: number;
  title: string;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [

    {id: 0, title: 'Thriller', name: 'Michael Jackson', price: 9.95, amount: 10},
    {id: 1, title: 'Back in Black', name: 'AC/DC', price: 8.95, amount: 10},
    {id: 2, title: 'The Dark side of the Moon', name: 'Pink Floyd', price: 6.95, amount: 10},
    {id: 3, title: 'The Bodyguard', name: 'Whitney Heuston', price: 9.95, amount: 10},
    {id: 4, title: 'Bad', name: 'Michael Jackson', price: 9.95, amount: 10},
  ];

private cart = [];
private numCartItems = new BehaviorSubject(0);

constructor() { }

getProducts()
{
  return this.data;
}

getCart()
{
  return this.cart;
}

getNumCartItems()
{
  return this.numCartItems;
}

addProduct(product)
{
  let added = false;
  for(let p of this.cart)
  {
    if(p.id === product.id)
    {
      p.amount += 1;
      added = true;
      break;
    }
  }
  if(!added)
  {
    product.amount = 1;
    this.cart.push(product);
  }
  this.numCartItems.next(this.numCartItems.value + 1);
}

decreaseProduct(product)
{
  for(let [index, p] of this.cart.entries())
  {
    if(p.id === product.id)
    {
      p.amount -=1;
      if(p.amount ==0)
      {
        this.cart.splice(index, 1);
      }
    }
  }
  this.numCartItems.next(this.numCartItems.value - 1)
}

deleteProduct(product)
{
  for(let [index, p] of this.cart.entries())
  {
  if([p.id === product.id])
    {
      this.numCartItems.next(this.numCartItems.value - p.amount);
      this.cart.splice(index, 1);
    }
  }
}

  
}
