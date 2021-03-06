import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { KijiItem } from '../../KijiItem';
import KijiItemsJson from '../../const/scrapbooks.json';
import { KirinukiComponent } from './kirinuki/kirinuki.component';
import { KirinukiModalContentComponent } from './kirinuki-modal-content/kirinuki-modal-content.component';
import { ScrapbookKirinukiListService } from './scrapbook.kirinuki.list-service';
import { PageService } from '../../services/page.service';
import { Kirinuki } from '../../Kirinuki';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  providers: [{provide: ScrapbookKirinukiListService, useClass: ScrapbookKirinukiListService }],
  selector: 'app-scrapbook',
  templateUrl: './scrapbook.page.html',
  styleUrls: ['./scrapbook.page.scss'],
})
export class ScrapbookPage implements OnInit {

  scrapbookId = null;
  kijiItem: KijiItem;
  kirinukiList$: Observable<Kirinuki[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private scrapbookKirinukiListService: ScrapbookKirinukiListService,
              private menuController: MenuController,
              private pageSvc: PageService) { }

  ngOnInit() {
    this.scrapbookId = this.activatedRoute.snapshot.paramMap.get('scrapbookId');
    this.kijiItem = KijiItemsJson.kijiItems.find((kijiItem) => kijiItem.kijiId === this.scrapbookId);

    const title = this.kijiItem.title;
    const metaDesc =  this.kijiItem.note;
    const metaImg = this.kijiItem.metaImageUrl;
    this.pageSvc.setPage({ title, metaDesc, metaImg });

    this.kirinukiList$ = this.scrapbookKirinukiListService.getKirinukiList(this.kijiItem.url)
                                    .pipe(
                                      map(kirinukiListJson => kirinukiListJson.kirinukiList)
                                    );
  }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
