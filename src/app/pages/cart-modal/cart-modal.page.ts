import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { Product } from 'src/app/Services/cart.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

cart: Product[] = [];


  constructor(private cartService: CartService, private modalctrl: ModalController,  private alertCtrl: AlertController, private navCtrl:NavController ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product)
  {
    this.cartService.addProduct(product);
  }

  deleteCartItem(product)
  {
    this.cartService.deleteProduct(product);
  }

  getTotal()
  {
    // [{price: 5, amount: 2}]
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close()
  {
    this.modalctrl.dismiss();
  }

  async checkout()
  {
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order',
      message: 'Your CD will be with you within 2-3 working days',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.navCtrl.navigateBack('/home');
    });
  }
}
