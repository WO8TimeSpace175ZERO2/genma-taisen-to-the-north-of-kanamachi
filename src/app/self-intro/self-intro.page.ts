import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-self-intro',
  templateUrl: './self-intro.page.html',
  styleUrls: ['./self-intro.page.scss'],
})
export class SelfIntroPage implements OnInit {

  constructor(private pageSvc: PageService) { }

  ngOnInit() {
    const title = '自己紹介';
    // tslint:disable-next-line:max-line-length
    const metaDesc = 'WO8TimeSpace175ZERO2@hexagonminerの自己紹介と当ブログ内容の問い合わせ先について | 日本初のIonic/Angular製幻魔大戦ブログSPA。幻魔大戦 平井和正 石ノ森章太郎 石森章太郎  #幻魔大戦 #平井和正 #石森章太郎 #石ノ森章太郎';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/red-eyes-vega.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });
  }
  openLink(uri: string) {
    window.open(uri, '_system');
  }
}
