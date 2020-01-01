import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PageService } from '../services/page.service';
import { KijiItems } from '../KijiItems';
import { KijiItem } from '../KijiItem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import KijiItemsJson from '../const/wolfsessions.json';

@Component({
  selector: 'app-wolfsessions',
  templateUrl: './wolfsessions.page.html',
  styleUrls: ['./wolfsessions.page.scss'],
})
export class WolfsessionsPage implements OnInit {

  kijiItemList: KijiItem[] = KijiItemsJson.kijiItems ;

  constructor(private menuController: MenuController,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = '平井和正の対談記事一覧';
    const metaDesc = '幻魔大戦学における幻魔大戦解釈論において必要な平井和正の対談記事';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });
  }

  ionViewDidLeave() {
    this.menuController.close();
  }

}
