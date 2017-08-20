import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

//api
import{TypeSignalementApiGlobal} from '../../models/typesignalementapi-global.model';
import{TypeSignalementService} from '../../services/typesignalementapi.service';

@Component({
  selector: 'page-type_signalement',
  templateUrl: 'type_signalement.html'
})
export class TypeSignalementPage {

  latitude:number;
  longitude:number;
  anomalies:TypeSignalementApiGlobal;

  constructor(public navCtrl: NavController,private typeSignalementService:TypeSignalementService,public navParams:NavParams) {
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');

    this.typeSignalementService.getObjects()
    .then(anomaliesfetched =>{
    this.anomalies=anomaliesfetched;

  });

  }

  goCameraPage(anomalieId){
    this.navCtrl.push(CameraPage,{idAnomalie: anomalieId,longitude:this.longitude,latitude:this.latitude});

  }

}
