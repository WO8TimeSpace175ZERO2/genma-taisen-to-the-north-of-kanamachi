import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {


  constructor(private pageSvc: PageService) {}

  ngOnInit() {
    const title = '金町の北上で幻魔大戦を叫んだけもの';
    const metaDesc = '日本初のIonic/Angular製幻魔大戦ブログSPA。幻魔大戦 平井和正 石ノ森章太郎 石森章太郎  #幻魔大戦 #平井和正 #石森章太郎 #石ノ森章太郎';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg, skipTitlePostfix: true });
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }



}
