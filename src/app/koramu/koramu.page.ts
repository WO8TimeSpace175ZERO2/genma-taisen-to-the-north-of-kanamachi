import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { KijiItem } from '../KijiItem';
import { KijiItems } from '../KijiItems';
import { KoramuArticlesService } from './koramu.articles-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  providers: [
    {
      provide:  KoramuArticlesService, useClass: KoramuArticlesService
    }
  ],
  selector: 'app-koramu',
  templateUrl: './koramu.page.html',
  styleUrls: ['./koramu.page.scss'],
})
export class KoramuPage implements OnInit {
  kijiItemList$: Observable<KijiItem[]>;

  constructor(private menuController: MenuController,  private koramuArticlesService: KoramuArticlesService) { }

  ngOnInit() {
    this.kijiItemList$ = this.koramuArticlesService
                              .getKoramuArticles('https://reverent-torvalds-1d6345.netlify.com/assets/json/koramus/koramus.json')
                              .pipe(
                                map(koramus => koramus.kijiItems)
                              );
  }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
