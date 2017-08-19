import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignalementPage } from '../signalement/signalement';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  id:number;

  constructor(public navCtrl: NavController,private navParams:NavParams ) {
    this.id= navParams.get('id');

  }

  goSignalementPage(): void {
    this.navCtrl.push(SignalementPage, {id: this.id});

  }

}
