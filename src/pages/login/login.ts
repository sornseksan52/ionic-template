import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabHomePage } from '../tab-home/tab-home';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    //กำหนดตัวแปรผูกกับฟอร์ม(Modal)
    userData = {
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
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signup() {
    this.navCtrl.setRoot(RegisterPage);

  }
  gotoDashboard() {
    this.navCtrl.setRoot(TabHomePage);
  }
  login() {
    //console.log(this.userData);
    this.webapi.postData(this.userData, 'login.php').then((result) => {
      this.responesData = result;
      //console.log(this.responesData);
      if(this.responesData.userData){
        let alert = this.alertCtrl.create({
          title:"สถานะการเข้าสู่ระบบ",
          subTitle:"เข้าสู่ระบบเรียบร้อย",
          buttons:['Dismiss']

        });
        alert.present();
        //บันทึกข้อมูลลง localstorage
        localStorage.setItem('userData',JSON.stringify(this.responesData));

        //ส่งกลับไปหน้าหลัก(dashboard)
        this.navCtrl.setRoot(TabsPage);
      }else{
        let alert = this.alertCtrl.create({
          title:"มีข้อผิดพลาด",
          subTitle:"user or password not ready! กรุณาลองใหม่",
          buttons:['Dismiss']

        });
        alert.present();
      }
    },(err)=>{
        console.log(err);
    });
  }
}
