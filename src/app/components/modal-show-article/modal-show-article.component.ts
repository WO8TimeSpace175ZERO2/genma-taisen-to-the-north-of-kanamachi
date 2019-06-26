import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { SafeHtml } from '@angular/platform-browser';
import { ModalShowArticleService} from './modal-show-article.service';

@Component({
  providers: [
    {
      provide:  ModalShowArticleService, useClass: ModalShowArticleService
    }
  ],
  selector: 'app-modal-show-article',
  templateUrl: './modal-show-article.component.html',
  styleUrls: ['./modal-show-article.component.scss'],
})
export class ModalShowArticleComponent implements OnInit {

  @Input() articleId: string;
  articleContent: Promise<SafeHtml>;

  constructor(navParams: NavParams, private modalShowArticleService: ModalShowArticleService) { }

  ngOnInit() {
      // console.log(`articleId ${this.articleId} ModalShowArticleComponent#ngOnInit()`);
      this.articleContent = this.modalShowArticleService.retrieveArticleContent(this.articleId);
  }
}
