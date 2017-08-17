import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TypeSignalementPage } from '../type_signalement/type_signalement';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goTypeSignalementPage(): void {
    this.navCtrl.push(TypeSignalementPage);

  }

}