import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})
export class ValidationPage {

  nom:string;
  prenom:string;
  email:string;
  commentaire:string;
  id:number;

  constructor(public navCtrl: NavController ,private navParams:NavParams) {
    this.nom= navParams.get('nom');
    this.prenom= navParams.get('prenom');
    this.email= navParams.get('email');
    this.commentaire= navParams.get('commentaire');
    this.id= navParams.get('id');

  

  }



}