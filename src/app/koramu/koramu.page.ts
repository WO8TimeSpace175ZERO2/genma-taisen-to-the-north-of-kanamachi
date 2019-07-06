import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { KijiItem } from '../KijiItem';
import { KijiItems } from '../KijiItems';
import { KoramuArticlesService } from './koramu.articles-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  providers: [
    {
      provide:  KoramuArticlesService, useClass: KoramuArticlesService
    }
  ],
  selector: 'app-koramu',
  templateUrl: './koramu.page.html',
  styleUrls: ['./koramu.page.scss'],
})
export class KoramuPage implements OnInit {
  // 動的にコラム記事一覧をRESTfulに取得するのは一時的にやめ
  // kijiItemList$: Observable<KijiItem[]>;
  kijiItemList: KijiItem[] = [
    {
        kijiId: 'koramu001history',
        title: '幻魔大戦 打切／中断の略歴',
        icon: 'basket',
        createdDate: '2019年07月04日',
        modifiedDate: '2019年07月04日'
    },
    {
        kijiId: 'koramu002callkadokawa',
        title: '角川文庫版と呼称する理由',
        icon: 'ice-cream',
        createdDate: '2019年07月04日',
        modifiedDate: '2019年07月04日'
    }
  ];

  constructor(private menuController: MenuController,  private koramuArticlesService: KoramuArticlesService) { }

  ngOnInit() {
    // this.kijiItemList$ = this.koramuArticlesService
    //                           .getKoramuArticles('https://reverent-torvalds-1d6345.netlify.com/assets/json/koramus/koramus.json')
    //                           .pipe(
    //                             map(koramus => koramus.kijiItems)
    //                           );
  }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
