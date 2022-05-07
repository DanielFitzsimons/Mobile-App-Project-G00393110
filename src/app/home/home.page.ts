import { Component, OnInit } from '@angular/core';
import {ArtistsService} from '../Services/artists.service';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../Services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
artistData:any = [];


cart = [];
products = [];
numCartItems: BehaviorSubject<number>;

  constructor(private artistsService:ArtistsService, private navCtrl:NavController, private cartService: CartService, private modalCtrl: ModalController) {}

  
    
  subsribe(){
    this.navCtrl.navigateBack('/subscribe');
  }


  feedback(){
    this.navCtrl.navigateBack('/feedback');
  }

  shop(){
    this.navCtrl.navigateBack('/products');
  }

  ngOnInit() {
    this.artistsService.getArtistsData().subscribe(
      (data)=>{
        this.artistData = data.Artists;
        console.log(this.artistData); 
      }
    );


    


   

  }


  
}
