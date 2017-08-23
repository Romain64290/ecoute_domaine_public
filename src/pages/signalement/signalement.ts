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

  nom:string;
  prenom:string;
  email:string;
  commentaire:string;
  idAnomalie:number;
  uidPhoto:string;
  latitude:number;
  longitude:number;

  private slideOneForm : FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,public navParams:NavParams,public alertCtrl: AlertController, public formBuilder: FormBuilder)
   {

    this.idAnomalie= navParams.get('idAnomalie');
    this.uidPhoto= navParams.get('uidPhoto');
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');

    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['',Validators.required]
  });

//si on ne recupere pas la latitude (geolocalisation), on demande de mettre  l'adresse dans commentaire
  if (!this.latitude) {
  this.showAlert();
    }

  }

  save(){
    
       this.submitAttempt = true;
    
       if(this.slideOneForm.valid){
        
           console.log("success!")
           console.log(this.slideOneForm.value.age);
           this.nom=this.slideOneForm.value.age;
        
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
