import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= navParams.get('uidPhoto');
  }

sendForm(){
this.navCtrl.push(ValidationPage,{
  nom:this.nom,
  prenom:this.prenom,
  email:this.email,
  commentaire:this.commentaire,
  idAnomalie:this.idAnomalie,
  uidPhoto:this.uidPhoto
  });
  }
}
