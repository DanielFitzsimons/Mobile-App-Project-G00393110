import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../Services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  cart = [];
  products = [];
  numCartItems: BehaviorSubject<number>;

  constructor(private navCtrl:NavController, private cartService: CartService, private modalCtrl: ModalController) { }
  home(){
    this.navCtrl.navigateBack('/home');
  }
  
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.numCartItems = this.cartService.getNumCartItems();
  }

  addToCart(product)
  {
    this.cartService.addProduct(product);
  }

  async openCart()
  {
      let modal = await this.modalCtrl.create({
        component:  CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.present();

  }

 

}

