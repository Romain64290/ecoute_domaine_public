import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import {TypeSignalementPage } from '../type_signalement/type_signalement';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitude:number;
  longitude:number;

  constructor(public navCtrl: NavController,public platform: Platform,private geolocation: Geolocation) {
    platform.ready().then(() => {
			this.localisation();
		});
  }

  goTypeSignalementPage(): void {
    this.navCtrl.push(TypeSignalementPage,{longitude:this.longitude,latitude:this.latitude});

  }

  localisation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude;
      this.longitude=resp.coords.longitude;
      
      
  
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    }
}