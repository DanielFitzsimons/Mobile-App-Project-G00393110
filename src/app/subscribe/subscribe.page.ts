import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  name: String;
  email: String;

  constructor(private navCtrl:NavController, private alertCtrl: AlertController, private storage: Storage) { }
  home(){
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {
  }

  async subscribed()
  {
      
    await this.alertCtrl.create({
      message: "Your Feedback has been saved for considersation! Thank you!!"
    }).then(res =>res.present());
    
    console.log(this.name, this.email);
    this.storage.create().then(() => {
      this.storage.set("", this.email)
      .then(
        () => {
          this.navCtrl.navigateBack('/home');
        }).catch();
      })
      .catch();
  }

}
