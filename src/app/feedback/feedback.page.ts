import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'; 
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
userFeed:string ="";

  constructor(private alertCtrl:AlertController, private storage: Storage,private navCtrl:NavController) { }
  home(){
    this.navCtrl.navigateBack('/home');
  }

  async save()
  {

    await this.alertCtrl.create({
      message: "Your Feedback has been saved for considersation! Thank you!!"
    }).then(res =>res.present());
    
    console.log(this.userFeed);
    this.storage.create().then(() => {
      this.storage.set("userFeed", this.userFeed)
      .then(
        () => {
          this.navCtrl.navigateBack('/home');
        }).catch();
      })
      .catch();

     
  }

  ngOnInit() {
  }

}
