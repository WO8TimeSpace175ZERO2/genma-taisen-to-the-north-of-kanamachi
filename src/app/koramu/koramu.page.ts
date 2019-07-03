import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { KijiItem } from '../KijiItem';

@Component({
  selector: 'app-koramu',
  templateUrl: './koramu.page.html',
  styleUrls: ['./koramu.page.scss'],
})
export class KoramuPage implements OnInit {
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public items: Array<KijiItem> = [
    {title: '1979年春季 リュウ Vol1 拝啓・読者さま。',  icon: 'flask',
      kijiId: '100all'},
      {title: '1979年夏季 リュウ Vol2 全宇宙の破滅をめざすGENMA-WARSの謎',  icon: 'wifi',
      kijiId: '100all'},
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    // console.log('★ionViewDidLeaveが呼ばれた');
    this.menuController.close();
  }

}
