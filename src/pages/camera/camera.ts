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
  latitude:number;
  longitude:number;

  constructor(public navCtrl: NavController,public navParams:NavParams ) {
    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= this.guid();
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');

  }

  goSignalementPage(): void {
    this.navCtrl.push(SignalementPage, {idAnomalie: this.idAnomalie, uidPhoto:this.uidPhoto,longitude:this.longitude,latitude:this.latitude});

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
