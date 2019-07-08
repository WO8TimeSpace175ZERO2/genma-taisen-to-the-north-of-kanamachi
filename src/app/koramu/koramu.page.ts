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
        kijiId: 'koramu001historya',
        title: '作品「幻魔大戦 」の成り立ち（１）',
        icon: 'basket',
        createdDate: '2019年07月08日',
        modifiedDate: '2019年07月08日'
    },
    {
      kijiId: 'koramu001historyb',
      title: '作品「幻魔大戦 」の成り立ち（２）',
      icon: 'basket',
      createdDate: '2019年07月08日',
      modifiedDate: '2019年07月08日'
    },
    {
      kijiId: 'koramu001historyc',
      title: '作品「幻魔大戦 」の成り立ち（３）',
      icon: 'basket',
      createdDate: '2019年07月08日',
      modifiedDate: '2019年07月08日'
    },
    {
      kijiId: 'koramu001historyd',
      title: '作品「幻魔大戦 」の成り立ち（４）',
      icon: 'basket',
      createdDate: '2019年07月08日',
      modifiedDate: '2019年07月08日'
    },
    {
      kijiId: 'koramu001historye',
      title: '作品「幻魔大戦 」の成り立ち（５）',
      icon: 'basket',
      createdDate: '2019年07月08日',
      modifiedDate: '2019年07月08日'
    },
    {
        kijiId: 'koramu002callkadokawa',
        title: '角川文庫版と呼称する理由',
        icon: 'ice-cream',
        createdDate: '2019年07月08日',
        modifiedDate: '2019年07月08日'
    },
    {
        kijiId: 'koramu003motoneta001',
        title: 'Rebirthの元ネタ（角川文庫版篇）',
        icon: 'git-compare',
        createdDate: '2019年07月08日',
        modifiedDate: '2019年07月08日'
    },
    {
        kijiId: 'koramu004motoneta002',
        title: 'Rebirthの元ネタ（とにかく小説の幻魔大戦篇）',
        icon: 'git-network',
        createdDate: '2019年07月08日',
        modifiedDate: '2019年07月08日'
    },
    {
        kijiId: 'koramu005howtoread',
        title: '幻魔大戦はどの順番で読むのがおススメ？',
        icon: 'beer',
        createdDate: '2019年07月08日',
        modifiedDate: '2019年07月08日'
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
