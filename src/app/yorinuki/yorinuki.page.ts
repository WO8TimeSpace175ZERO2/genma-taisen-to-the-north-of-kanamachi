import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { KijiItem } from '../KijiItem';
import KijiItemsJson from '../const/scrapbooks.json';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-list',
  templateUrl: 'yorinuki.page.html',
  styleUrls: ['yorinuki.page.scss']
})
export class YorinukiPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  // public items: Array<KijiItem> = [
  //   {title: '1979年春季 リュウ Vol1 拝啓・読者さま。',  icon: 'flask',
  //     url: 'https://reverent-torvalds-1d6345.netlify.com/plainArticles/plainArticle-worldview01.html'},
  //     {title: '1979年夏季 リュウ Vol2 全宇宙の破滅をめざすGENMA-WARSの謎',  icon: 'wifi',
  //     url: 'https://reverent-torvalds-1d6345.netlify.com/plainArticles/plainArticle-worldview02.html'},
  //     {title: 'SFアドベンチャー1982年3月号 幻魔シリーズ大特集 ',  icon: 'beer',
  //     url: 'https://reverent-torvalds-1d6345.netlify.com/plainArticles/plainArticle-worldview03.html'},
  //     {title: '1982年秋季 SFアドベンチャー増刊 平井和正の幻魔宇宙 Ⅰ',  icon: 'football',
  //     url: 'https://reverent-torvalds-1d6345.netlify.com/plainArticles/plainArticle-worldview04.html'},
  //     {title: 'ワールド・オブ・スパイダーバース (MARVEL)の一コマ',  icon: 'basketball',
  //     url: 'https://reverent-torvalds-1d6345.netlify.com/plainArticles/plainArticle-worldview05.html'}
  // ];

  public scrapBooks: KijiItem[] = KijiItemsJson.kijiItems ;
  constructor(private menuController: MenuController,
              private pageSvc: PageService) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  ngOnInit() {
    const title = '幻魔大戦ネタで誌面キャプチャ・スクラップブック';
    // tslint:disable-next-line:max-line-length
    const metaDesc = '平井和正や石森章太郎のインタビュー記事など幻魔大戦に関する雑誌の記事など | 日本初のIonic/Angular製幻魔大戦ブログSPA。幻魔大戦 平井和正 石ノ森章太郎 石森章太郎  #幻魔大戦 #平井和正 #石森章太郎 #石ノ森章太郎';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
