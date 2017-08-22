import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

//api
import{SignalementService} from '../../services/signalementapi.service';

@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})
export class ValidationPage {

  nom:string;
  prenom:string;
  email:string;
  commentaire:string;
  idAnomalie:number;
  uidPhoto:string;
  geoloc:string;
  //adresse necessaire si geoloc='unplugged'
  adresse:string;
  longitude:number;
  latitude:number;
  retour:any;

  signaleur = [{
    nom: 'totololo',
    prenom: '',
    email: '',
    type_signalement: 1,
    coordonnees: "0.0, 0.0",
    photo: "nomPhoto"
  }];

  constructor(public navCtrl: NavController,public navParams:NavParams,public signalementService:SignalementService) {
    this.nom= navParams.get('nom');
    this.prenom= navParams.get('prenom');
    this.email= navParams.get('email');
    this.commentaire= navParams.get('commentaire');
    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= navParams.get('uidPhoto');
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');

    //this.signalementService.addObjects(this.signaleur);
    this.retour=this.signalementService.addObjects(this.signaleur);

  }



}