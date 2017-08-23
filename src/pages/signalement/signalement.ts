//https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/

import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import{ValidationPage} from '../validation/validation';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-signalement',
  templateUrl: 'signalement.html'

})

export class SignalementPage {

  idAnomalie:number;
  uidPhoto:string;
  latitude:number;
  longitude:number;

  private signalementForm : FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,public navParams:NavParams,public alertCtrl: AlertController, public formBuilder: FormBuilder)
   {

    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= navParams.get('uidPhoto');
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');

    this.signalementForm = formBuilder.group({
      nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['',Validators.required],
      commentaire: ['']

  });

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

  this.submitAttempt = true;
  
     if(this.signalementForm.valid){
      
this.navCtrl.push(ValidationPage,{
  nom:this.signalementForm.value.nom,
  prenom:this.signalementForm.value.prenom,
  email:this.signalementForm.value.email,
  commentaire:this.signalementForm.value.commentaire,
  idAnomalie:this.idAnomalie,
  uidPhoto:this.uidPhoto,
  longitude:this.longitude,
  latitude:this.latitude
  });
  }
}

}
