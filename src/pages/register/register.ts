import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabHomePage } from '../tab-home/tab-home';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  //กำหนดตัวแปรผูกกับฟอร์ม(Modal)
  userData = {
    "fullname": "",
    "email": "",
    "tel": "",
    "username": "",
    "password": ""
  }
  //ตัวแปรจากการตอบกลับ
  responesData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  login() {
    this.app.getRootNav().push(LoginPage);
  }
  gotoDashboard() {
    this.navCtrl.setRoot(TabHomePage);
  }
  signup() {
    //console.log(this.userData);
    this.webapi.postData(this.userData, 'register.php').then((result) => {
      this.responesData = result;
      //console.log(this.responesData);
      if(this.responesData.userData){
        let alert = this.alertCtrl.create({
          title:"สถานะการลงทะเบียน",
          subTitle:"การลงทะเบียนเรียบร้อย",
          buttons:['Dismiss']

        });
        alert.present();
        this.navCtrl.setRoot(TabsPage);
      }
    },(err)=>{
        console.log(err);
    });
  }

}
