import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from '../services/page.service';
import { KijiItem } from '../KijiItem';
import { LinkColRetrieveService } from './linkcol.linkcol-retreive-service';
import LinkcolJson from '../const/linkcol.json';

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
  public linkcolArray: KijiItem[] = LinkcolJson.kijiItems;


  constructor(private linkColRetrieveService: LinkColRetrieveService,
              private pageSvc: PageService) { }

  ngOnInit() {
    const title = 'LinkCollection';
    // tslint:disable-next-line:max-line-length
    const metaDesc = '平井和正や幻魔大戦に関する外部サイトのアクセス先を収集';
    this.pageSvc.setPage({ title, metaDesc });

    // tslint:disable-next-line:max-line-length
    // this.linkcol$ = this.linkColRetrieveService.getLinkCol('https://wo8timespace175zero2.github.io/kgw-rsrc/assets/json/linkcol/linkcol.json');
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }



}
