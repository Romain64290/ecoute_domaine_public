import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignalementPage } from '../signalement/signalement';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  constructor(public navCtrl: NavController) {

  }

  goSignalementPage(): void {
    this.navCtrl.push(SignalementPage);

  }

}
