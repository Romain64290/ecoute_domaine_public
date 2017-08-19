import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignalementPage } from '../signalement/signalement';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  idAnomalie:number;
  uidPhoto:string;

  constructor(public navCtrl: NavController,public navParams:NavParams ) {
    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= this.guid();

  }

  goSignalementPage(): void {
    this.navCtrl.push(SignalementPage, {idAnomalie: this.idAnomalie, uidPhoto:this.uidPhoto});

  }

  // genere un id unique 
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
