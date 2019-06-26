import { Component, OnInit } from '@angular/core';
import { SagalistBookService } from './sagalist.book-service';
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
  constructor(private sagalistBookService: SagalistBookService) { }

  ngOnInit() {
    this.series1$ = this.sagalistBookService.getSagaSeries('https://reverent-torvalds-1d6345.netlify.com/assets/json/books/series1.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );

    this.series2$ = this.sagalistBookService.getSagaSeries('https://reverent-torvalds-1d6345.netlify.com/assets/json/books/series2.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );

    this.series3$ = this.sagalistBookService.getSagaSeries('https://reverent-torvalds-1d6345.netlify.com/assets/json/books/series3.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );

    this.series4$ = this.sagalistBookService.getSagaSeries('https://reverent-torvalds-1d6345.netlify.com/assets/json/books/series4.json')
                              .pipe(
                                map(sagaSeries => sagaSeries.books)
                              );
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }

}
