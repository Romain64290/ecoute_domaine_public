import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-type_signalement',
  templateUrl: 'type_signalement.html'
})
export class TypeSignalementPage {

  constructor(public navCtrl: NavController) {

  }

  goCameraPage(): void {
    this.navCtrl.push(CameraPage);

  }

}
