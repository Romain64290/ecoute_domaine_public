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
  id:number;

  constructor(public navCtrl: NavController,private navParams:NavParams) {
    this.id= navParams.get('id');
  }

sendForm(){
this.navCtrl.push(ValidationPage,{
  nom:this.nom,
  prenom:this.prenom,
  email:this.email,
  commentaire:this.commentaire,
  id:this.id
  });
  }
}
