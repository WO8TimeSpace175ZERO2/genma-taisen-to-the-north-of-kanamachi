import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      open: false
    },
    {
      title: '幻魔大戦サーガ一覧',
      url: '/sagalist',
      icon: 'cart',
      open: false
    } ,
    // {
    //   title: '雑誌よりぬき',
    //   open: false,
    //   icon: 'list',
    //   children: [
    //     {
    //       title: '誌面キャプチャ・スクラップブック',
    //       url: '/yorinuki',
    //       icon: 'list'
    //     } ,
    //     {
    //       title: '石森章太郎インタビュー記事',
    //       url: '/ishimori-shotaro-letter',
    //       icon: 'paper-plane'
    //     }
    //   ]
    // } ,
    {
      title: '誌面キャプチャ・スクラップブック',
      url: '/yorinuki',
      icon: 'list',
      open: false
    } ,
    {
      title: '石森章太郎インタビュー記事',
      url: '/ishimori-shotaro-letter',
      icon: 'paper-plane',
      open: false
    },
    {
      title: 'コラム',
      url: '/koramu',
      icon: 'list',
      open: false
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}