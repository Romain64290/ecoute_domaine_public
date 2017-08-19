import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-type_signalement',
  templateUrl: 'type_signalement.html'
})
export class TypeSignalementPage {

  typeSignalement:number;

  constructor(public navCtrl: NavController) {

  }

  goCameraPage(anomalieId){
    this.navCtrl.push(CameraPage,{id: anomalieId});

  }

}
