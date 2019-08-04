import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService} from '../components/article/article.service';
import { PageService } from '../services/page.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable, from } from 'rxjs';
import { map,  find } from 'rxjs/operators';
import { KijiItem } from '../KijiItem';
import { KoramuDetailsArticlesService } from './koramudetails.articles-service';
import KijiItemsJson from '../const/koramus.json';

@Component({
  providers: [
    {
      provide:  KoramuDetailsArticlesService, useClass: KoramuDetailsArticlesService
    },
  ],
  selector: 'app-koramudetails',
  templateUrl: './koramudetails.page.html',
  styleUrls: ['./koramudetails.page.scss'],
})
export class KoramudetailsPage implements OnInit {
  // 動的にRESTfulでコラム記事一覧から記事のタイトルと作成日と更新日を取得する。
  // kijiItem$: Observable<KijiItem>;
  kijiItem: KijiItem;

  articleId = null;
  articleContent: Promise<SafeHtml>;
  constructor(private activatedRoute: ActivatedRoute ,
              private articleService: ArticleService,
              private koramuDetailsArticlesService: KoramuDetailsArticlesService,
              private pageSvc: PageService) {
    }

  ngOnInit() {
    // https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/
    this.articleId = this.activatedRoute.snapshot.paramMap.get('articleId');
    // let kijiItemTmp: KijiItem = null;
    // let kijiItemList$: Observable<KijiItem[]> = null;
    // this.koramuDetailsArticlesService
    //                           .getKoramuArticles('https://reverent-torvalds-1d6345.netlify.com/assets/json/koramus/koramus.json')
    //                           .pipe(
    //                             map(koramus => koramus.kijiItems),
    //                           ).subscribe((kijiItems) => {
    //                             this.kijiItem$ = from(kijiItems)
    //                                                       .pipe(
    //                                                         find((kijiItem) =>  kijiItem.kijiId === this.articleId)
    //                                                       );
    //                           });

    this.kijiItem = KijiItemsJson.kijiItems.find((kijiItem) => kijiItem.kijiId === this.articleId);
    const title = this.kijiItem.title;
    const metaDesc =  this.kijiItem.note;
    const metaImg = this.kijiItem.metaImageUrl;
    this.pageSvc.setPage({ title, metaDesc, metaImg });

    this.articleContent = this.articleService.retrieveArticleContent(this.articleId );
  }

}
