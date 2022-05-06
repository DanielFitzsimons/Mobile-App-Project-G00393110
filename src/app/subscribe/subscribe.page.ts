import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  constructor(private navCtrl:NavController) { }
  home(){
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {
  }

}
