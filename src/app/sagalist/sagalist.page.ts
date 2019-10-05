import { Component, OnInit } from '@angular/core';
import { SagalistBookService } from './sagalist.book-service';
import { PageService } from '../services/page.service';
import { SagaSeries } from './saga-series';
import { SagaBook } from './saga-book';
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
  constructor(private sagalistBookService: SagalistBookService,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = '幻魔大戦サーガ一覧';
    const metaDesc = '幻魔大戦シリーズ作品一覧';
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ title, metaDesc, metaImg });

    this.series1$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series1.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );

    this.series2$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series2.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );

    this.series3$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series3.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );

    this.series4$ = this.sagalistBookService.getSagaSeries('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/books/series4.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }

}
