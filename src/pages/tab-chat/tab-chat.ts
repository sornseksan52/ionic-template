import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-tab-chat',
  templateUrl: 'tab-chat.html',
})
export class TabChatPage {
  //เก็บื่อและ message
  fullname: string = '';
  message: string = '';
  _chatSubscription;
  messages: object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public audio: NativeAudio,
     public platform: Platform) {
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data == null) {
      this.fullname = 'Guest';
    } else {
      this.fullname = data.userData.fullname;
    }
    //Play sound when read new message
    if (!this.platform.is('core')) {
      this.audio.preloadSimple('success', 'assets/sound/get_outto.mp3').then(null);
    }
    //read form firebase
    this._chatSubscription = this.db.list('/chat').valueChanges().subscribe((res) => {
      if (!this.platform.is('core')) {
        this.audio.play('success').then(null);
      }
      this.messages = res;
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {

  }

  sendMessage() {
    if (this.message != '') {
      this.db.list('/chat').push({
        username: this.fullname,
        message: this.message
      }).then(() => {
        //message send
        if (!this.platform.is('core')) {
          this.audio.play('success').then(null);
        }
      }, (err) => {
        //error
        console.log(err);
      });
      //clear input 
      this.message = '';
    }
  }

}
