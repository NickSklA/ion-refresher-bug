import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
      private toastController: ToastController
  ) {}

  refresh(event) {
    setTimeout(() => {
      console.log('Refresh completed');
      this.presentToast();
      event.target.complete();
    }, 4000);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Refresh completed!',
      duration: 2000
    });
    toast.present();
  }
}
