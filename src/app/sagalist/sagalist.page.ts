import { Component, OnInit } from '@angular/core';
import { SagalistBookService } from './sagalist.book-service';
import { PageService } from '../services/page.service';
import { SagaSeries } from './saga-series';
import { SagaBook } from './saga-book';
import Series1Json from '../const/books/series1.json';
import Series2Json from '../const/books/series2.json';
import Series3Json from '../const/books/series3.json';
import Series4Json from '../const/books/series4.json';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  providers: [
    {
      provide:  SagalistBookService, useClass: SagalistBookService
    }
  ],
  selector: 'app-sagalist',
  templateUrl: './sagalist.page.html',
  styleUrls: ['./sagalist.page.scss'],
})
export class SagalistPage implements OnInit {
  series1$: Observable<SagaBook[]>;
  series2$: Observable<SagaBook[]>;
  series3$: Observable<SagaBook[]>;
  series4$: Observable<SagaBook[]>;
  series1: SagaBook[] = Series1Json.books;
  series2: SagaBook[] = Series2Json.books;
  series3: SagaBook[] = Series3Json.books;
  series4: SagaBook[] = Series4Json.books;
  constructor(private sagalistBookService: SagalistBookService,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = '幻魔大戦サーガ一覧';
    const metaDesc = '幻魔大戦シリーズ作品一覧';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });

    // tslint:disable-next-line:max-line-length
    // this.series1$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series1.json')
    //                           .pipe(
    //                             map(sagaSeries => sagaSeries.books)
    //                           );

    // tslint:disable-next-line:max-line-length
    // this.series2$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series2.json')
    //                           .pipe(
    //                             map(sagaSeries => sagaSeries.books)
    //                           );

    // tslint:disable-next-line:max-line-length
    // this.series3$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series3.json')
    //                           .pipe(
    //                             map(sagaSeries => sagaSeries.books)
    //                           );

    // tslint:disable-next-line:max-line-length
    // this.series4$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series4.json')
    //                           .pipe(
    //                             map(sagaSeries => sagaSeries.books)
    //                           );
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }

}
