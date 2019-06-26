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
      icon: 'home'
    },
    {
      title: '幻魔大戦サーガ一覧',
      url: '/sagalist',
      icon: 'cart'
    } ,
    {
      title: '石森章太郎インタビュー記事',
      url: '/ishimori-shotaro-letter',
      icon: 'paper-plane'
    } ,
    {
      title: '雑誌よりぬき',
      url: '/yorinuki',
      icon: 'list'
    } ,
    {
      title: 'コラム',
      url: '/koramu',
      icon: 'list'
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
