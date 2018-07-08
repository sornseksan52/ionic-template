import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalProvider } from '../../providers/global/global';
import { CoursedetailPage } from '../coursedetail/coursedetail';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {
  responseData: any;
  imgPart:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController,
    public global: GlobalProvider
  ) {
    this.imgPart=this.global.partImage;
  }

  ionViewDidLoad() {
    this.loadding();
  }

  doRefresh(refresher) {
   // console.log('Begin async operation', refresher);
    //begin
    setTimeout(() => {
      //end
      this.loadding();
      //console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadding() {
    this.webapi.getData('feed_course.php').then((result) => {
     // console.log(result);
      this.responseData = result;
    }, (error) => {
      console.log(error);
    });
  }
//ไปหน้า detail
courseDetail(cid){
//alert(cid);
this.app.getRootNav().push(CoursedetailPage,{cid:cid});
  }


}
