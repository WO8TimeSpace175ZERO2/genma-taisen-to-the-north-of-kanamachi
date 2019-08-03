import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PageService } from '../services/page.service';
import { KijiItems } from '../KijiItems';
import { KijiItem } from '../KijiItem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import KijiItemsJson from '../const/koramus.json';

@Component({
  providers: [
  ],
  selector: 'app-koramu',
  templateUrl: './koramu.page.html',
  styleUrls: ['./koramu.page.scss'],
})
export class KoramuPage implements OnInit {

  kijiItemList: KijiItem[] = KijiItemsJson.kijiItems ;

  constructor(private menuController: MenuController,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = 'コラム一覧';
    // tslint:disable-next-line:max-line-length
    const metaDesc = 'WO8TimeSpace175ZERO2@hexagonminerが幻魔大戦などに関し自己主張しまくるブログ | 日本初のIonic/Angular製幻魔大戦ブログSPA。幻魔大戦 平井和正 石ノ森章太郎 石森章太郎  #幻魔大戦 #平井和正 #石森章太郎 #石ノ森章太郎';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });
  }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
