import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignalementPage } from '../signalement/signalement';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  id:number;
  uidPhoto:string;

  constructor(public navCtrl: NavController,private navParams:NavParams ) {
    this.id= navParams.get('id');
    this.uidPhoto= this.guid();

  }

  goSignalementPage(): void {
    this.navCtrl.push(SignalementPage, {id: this.id});

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
