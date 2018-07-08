import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule  } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';

@NgModule({
  declarations: [
    MyApp,
    TabHomePage,
    TabCoursePage,
    TabContactPage,
    TabArticlePage,
    TabServicePage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabsPage,
    RegisterPage,
    LoginPage,
    CoursedetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabHomePage,
    TabCoursePage,
    TabContactPage,
    TabArticlePage,
    TabServicePage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabsPage,
    RegisterPage,
    LoginPage,
    CoursedetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    GlobalProvider
  ]
})
export class AppModule {}
