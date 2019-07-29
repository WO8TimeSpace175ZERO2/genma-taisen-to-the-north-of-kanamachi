import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KijiItem } from '../../KijiItem';
import KijiItemsJson from '../../const/scrapbooks.json';
import { KirinukiComponent } from './kirinuki/kirinuki.component';


@Component({
  selector: 'app-scrapbook',
  templateUrl: './scrapbook.page.html',
  styleUrls: ['./scrapbook.page.scss'],
})
export class ScrapbookPage implements OnInit {

  scrapbookId = null;
  kijiItem: KijiItem;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.scrapbookId = this.activatedRoute.snapshot.paramMap.get('scrapbookId');
    this.kijiItem = KijiItemsJson.kijiItems.find((kijiItem) => kijiItem.kijiId === this.scrapbookId);
  }

}
