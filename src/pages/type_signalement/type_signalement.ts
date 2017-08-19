import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

//api
import{TypeSignalementApiGlobal} from '../../models/typesignalementapi-global.model';
import{TypeSignalementService} from '../../services/typesignalementapi.service';

@Component({
  selector: 'page-type_signalement',
  templateUrl: 'type_signalement.html'
})
export class TypeSignalementPage {

  anomalies:TypeSignalementApiGlobal;

  constructor(public navCtrl: NavController,private typeSignalementService:TypeSignalementService) {
    this.typeSignalementService.getObjects()
    .then(anomaliesfetched =>{
    this.anomalies=anomaliesfetched;

  });

  }

  goCameraPage(anomalieId){
    this.navCtrl.push(CameraPage,{idAnomalie: anomalieId});

  }

}
