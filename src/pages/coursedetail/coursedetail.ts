import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the CoursedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {
  imaPath:any;
  getCid:number;
  responseData:any;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public global: GlobalProvider,
    public app: App,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController,) {
      this.imaPath = this.global.partImage;
      this.getCid = this.navParams.get('cid');
  }

  ionViewDidLoad() {
    //alert(this.getCid);
    this.webapi.getData('feed_course_detail.php?cid='+this.getCid).then((result) => {
      console.log(result);
       this.responseData = result;
     }, (error) => {
       console.log(error);
     });
  }

}
