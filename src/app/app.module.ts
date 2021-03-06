import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }   from '@angular/http';

// PAges
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TypeSignalementPage } from '../pages/type_signalement/type_signalement';
import { SignalementPage } from '../pages/signalement/signalement';
import { CameraPage } from '../pages/camera/camera';
import { ValidationPage } from '../pages/validation/validation';


//plugins
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera} from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FCM } from '@ionic-native/fcm';

//Api
import{TypeSignalementService} from '../services/typesignalementapi.service';
import{SignalementService} from '../services/signalementapi.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TypeSignalementPage,
    SignalementPage,
    CameraPage,
    ValidationPage

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TypeSignalementPage,
    SignalementPage,
    CameraPage,
    ValidationPage

  ],
  providers: [
    TypeSignalementService,
    SignalementService,
    Geolocation,
    Camera,
    FileTransfer,
    StatusBar,
    SplashScreen,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
