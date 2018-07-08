import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { GlobalProvider } from '../global/global';
/*
  Generated class for the WebapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiServiceProvider {
  // Base URL 
  baseUrl: any;
  constructor(public http: Http, public toast: ToastController, public global: GlobalProvider) {
    //console.log('Hello WebapiServiceProvider Provider');
    this.baseUrl = this.global.baseURLAPI;
  }

  // Post
  postData(objdata, segment) {
    return new Promise((resolve, reject) => {
      // header
      let headers = new Headers();
      headers.append('Authorization', this.global.authKey);
      headers.append('Content-Type', 'application/json');

      this.http.post(this.baseUrl + segment, JSON.stringify(objdata), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          if (err.status == 0) {
            this.toast.create({
              message: 'ติดต่อ api ไม่ได้',
              duration: 3000
            }).present();
          }
          reject(err);
        });
    });
  }

  // Get
  getData(segment) {
    return new Promise((resolve, reject) => {
      // header
      let headers = new Headers();
      headers.append('Authorization',this.global.authKey);
      headers.append('Content-Type', 'application/json');

      this.http.get(this.baseUrl + segment, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          if (err.status == 0) {
            this.toast.create({
              message: 'ติดต่อ api ไม่ได้',
              duration: 3000
            }).present();
          }
          reject(err);
        });
    });
  }

}