import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { KijiItems } from '../KijiItems';
import { KijiItem } from '../KijiItem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import KijiItemsJson from '../const/koramus.json';

@Component({
  providers: [
  ],
  selector: 'app-koramu',
  templateUrl: './koramu.page.html',
  styleUrls: ['./koramu.page.scss'],
})
export class KoramuPage implements OnInit {

  kijiItemList: KijiItem[] = KijiItemsJson.kijiItems ;

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
