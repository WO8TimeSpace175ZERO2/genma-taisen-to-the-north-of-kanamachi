import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KijiItem } from '../../KijiItem';
import KijiItemsJson from '../../const/scrapbooks.json';
import { KirinukiComponent } from './kirinuki/kirinuki.component';
import { KirinukiModalContentComponent } from './kirinuki-modal-content/kirinuki-modal-content.component';
import { ScrapbookKirinukiListService } from './scrapbook.kirinuki.list-service';
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

  constructor(private activatedRoute: ActivatedRoute, private scrapbookKirinukiListService: ScrapbookKirinukiListService) { }

  ngOnInit() {
    this.scrapbookId = this.activatedRoute.snapshot.paramMap.get('scrapbookId');
    this.kijiItem = KijiItemsJson.kijiItems.find((kijiItem) => kijiItem.kijiId === this.scrapbookId);
    this.kirinukiList$ = this.scrapbookKirinukiListService.getKirinukiList(this.kijiItem.url)
                                    .pipe(
                                      map(kirinukiListJson => kirinukiListJson.kirinukiList)
                                    );
  }

}
