import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from '../services/page.service';
import { KijiItem } from '../KijiItem';
import { LinkColRetrieveService } from './linkcol.linkcol-retreive-service';

@Component({
  providers: [
    {provide: LinkColRetrieveService, useClass: LinkColRetrieveService}
  ],
  selector: 'app-linkcol',
  templateUrl: './linkcol.page.html',
  styleUrls: ['./linkcol.page.scss'],
})
export class LinkcolPage implements OnInit {
  public linkcol$: Observable<KijiItem[]>  ;


  constructor(private linkColRetrieveService: LinkColRetrieveService,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = 'LinkCollection';
    // tslint:disable-next-line:max-line-length
    const metaDesc = '平井和正や幻魔大戦に関する外部サイトのアクセス先を収集';
    this.pageSvc.setPage({ title, metaDesc });

    this.linkcol$ = this.linkColRetrieveService.getLinkCol('https://reverent-torvalds-1d6345.netlify.com/assets/json/linkcol/linkcol.json');
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }



}
