import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {


  constructor(private pageSvc: PageService) {}

  ngOnInit() {
    const metaImg = 'https://eager-kilby-e6c21f.netlify.com/assets/genma-wars-home.jpg';
    this.pageSvc.setPage({ metaImg });
  }

  openLink(uri: string) {
    window.open(uri, '_system');
  }



}
