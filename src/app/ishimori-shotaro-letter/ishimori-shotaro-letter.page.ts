import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { SafeHtml } from '@angular/platform-browser';
import { EmbeddedArticleService } from '../components/embedded-article/embedded-article.service';
import { PageService } from '../services/page.service';

@Component({
  providers: [
    {
      provide:  EmbeddedArticleService, useClass: EmbeddedArticleService
    }
  ],
  selector: 'app-ishimori-shotaro-letter',
  templateUrl: './ishimori-shotaro-letter.page.html',
  styleUrls: ['./ishimori-shotaro-letter.page.scss'],
})
export class IshimoriShotaroLetterPage implements OnInit {

  articleId = '100all';
  articleContent: Promise<SafeHtml>;

  constructor(public navController: NavController,
              private embeddedArticleService: EmbeddedArticleService,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = '石森章太郎インタビュー記事';
    // tslint:disable-next-line:max-line-length
    const metaDesc = '徳間書店 1979年春季 リュウ Vol1 幻魔大戦連載開始特集「石森章太郎からのメッセージ 拝啓・読者さま。」にて石森章太郎が1979年春の新作・リュウ掲載版幻魔大戦の意気込みについて語ったインタビュー記事をテキスト起こししたもの';
    // Twitter Cardに使用する画像は自サイトである必要が無い。
    const metaImg = 'https://wo8timespace175zero2.github.io/kgw-rsrc/assets/scrapbooks_a/scrapbook0001/sb0001-005.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });

    // console.log(`articleId ${this.articleId} EmbeddedArticleComponent#ngOnInit()`);
    // this.articleContent = this.embeddedArticleService.retrieveArticleContent(this.articleId);
  }

}
