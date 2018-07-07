import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  userDatail: any;
  loginStatus: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) {
    //การอ่านค่าจากstorage
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data == null) {
      this.userDatail = "Your are guest";
      this.loginStatus = true;
    } else {
      this.userDatail = data.userData.fullname;
      this.loginStatus = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register() {
    //  this.navCtrl.push(RegisterPage);
    // การพุตลอยเหนือแท็ป
    this.app.getRootNav().push(RegisterPage);
  }
  login() {
    this.app.getRootNav().push(LoginPage);
  }
  logout() {
    // localStorage.set('userData','');
    localStorage.removeItem("userData");
    this.navCtrl.setRoot(TabsPage);
  }

}
