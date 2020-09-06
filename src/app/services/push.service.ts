import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial(){
        this.oneSignal.startInit('b1cfc0fa-5e41-4ca6-b48a-e5e7c49aa3a6', '741917013960');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    console.log('Notificación recibica',noti)
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('Notificación abierta',noti)
    });

    this.oneSignal.endInit(); 
  }
}
