import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import{ValidationPage} from '../validation/validation';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-signalement',
  templateUrl: 'signalement.html'
})
export class SignalementPage {

  nom:string;
  prenom:string;
  email:string;
  commentaire:string;
  idAnomalie:number;
  uidPhoto:string;
  latitude:number;
  longitude:number;

  constructor(public navCtrl: NavController,public navParams:NavParams,public platform: Platform,private geolocation: Geolocation,) {
    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= navParams.get('uidPhoto');

    platform.ready().then(() => {
			this.localisation();
		});

  }


localisation(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude=resp.coords.latitude;
    this.longitude=resp.coords.longitude
    
    

   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }

sendForm(){
this.navCtrl.push(ValidationPage,{
  nom:this.nom,
  prenom:this.prenom,
  email:this.email,
  commentaire:this.commentaire,
  idAnomalie:this.idAnomalie,
  uidPhoto:this.uidPhoto,
  longitude:this.longitude,
  latitude:this.latitude
  });
  }


}
