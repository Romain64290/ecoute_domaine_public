import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignalementPage } from '../signalement/signalement';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  idAnomalie:number;
  latitude:number;
  longitude:number;

  // variables pour definir taille de la photo
  pictureWidth: number;
  pictureHeight: number;
  widthMargin: number = 75;
  heightMargin: number = 75;

  // autres variables pour la photo
  fileUriImage: any;
  uidPhoto:string;
  uploadApi = 'https://efapau1.agglo-pau.fr/upload/index.php';

  constructor(public navCtrl: NavController,public navParams:NavParams,private platform: Platform, private camera: Camera, private transfer: FileTransfer ) {
    this.idAnomalie= navParams.get('idAnomalie');
    this.longitude= navParams.get('longitude');
    this.latitude= navParams.get('latitude');
    // genere un nom aleatoire pour la photo
    this.uidPhoto= this.guid();

    //Defini la taille de la photo à partir de la taille de la plateforme
    platform.ready().then((readySource) => {
      this.pictureWidth = platform.width() - this.widthMargin;
      this.pictureHeight = platform.height() - this.heightMargin;
    });

  }

  goSignalementPage(){
    this.upload();
    this.navCtrl.push(SignalementPage, {idAnomalie: this.idAnomalie, uidPhoto:this.uidPhoto,longitude:this.longitude,latitude:this.latitude});

  }

  // genere un id unique pour le nom de la photo
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }



takePicture() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation :true        
  }

  this.camera.getPicture(options).then((imageData) => {

    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    //this.base64Image = 'data:image/jpeg;base64,' + imageData;
    this.fileUriImage = imageData;
  }, (err) => {
    // Handle error
  });
}

upload() {
  let options: FileUploadOptions = {
     fileKey: 'file',//type de ressource upload
     fileName: this.uidPhoto//nom de la photo sur le serveur
  }
  const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.upload(this.fileUriImage, encodeURI(this.uploadApi), options)
    .then((data) => {

    }, (err) => {

    })
}

}