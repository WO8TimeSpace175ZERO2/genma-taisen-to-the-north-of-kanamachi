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
      open: false,
      children: []
    },
    {
      title: '幻魔大戦サーガ一覧',
      url: '/sagalist',
      icon: 'cart',
      open: false,
      children: []
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
      title: '誌面スクラップブック',
      url: '/yorinuki',
      icon: 'list',
      open: false,
      children: []
    } ,
    {
      title: '石森章太郎インタビュー記事',
      url: '/ishimori-shotaro-letter',
      icon: 'paper-plane',
      open: false,
      children: []
    },
    {
      title: 'ウルフSession座談会特集',
      url: '/wolfsessions',
      icon: 'people',
      open: false,
      children: []
    },
    {
      title: 'コラム',
      url: '/koramu',
      icon: 'list',
      open: false,
      children: []
    },
    {
      title: '自己紹介・問い合わせ先',
      url: '/self-intro',
      icon: 'mail',
      open: false,
      children: []
    },
    {
      title: 'LinkCollection',
      url: '/linkcol',
      icon: 'filing',
      open: false,
      children: []
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
