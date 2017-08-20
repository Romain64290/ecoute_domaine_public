import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import{ValidationPage} from '../validation/validation';


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

  constructor(public navCtrl: NavController,public navParams:NavParams,public alertCtrl: AlertController) {
    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= navParams.get('uidPhoto');
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');

//si on ne recupere pas la latitude (geolocalisation), on demande de mettre  l'adresse dans commentaire
  if (!this.latitude) {
  this.showAlert();
    }

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Géolocalisation désactivée!',
      subTitle: 'Merci de saisir l\'adresse de l\'anomalie signalée dans "commentaire"!',
      buttons: ['OK']
    });
    alert.present();
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
