import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { SafeHtml } from '@angular/platform-browser';
import { EmbeddedArticleService } from '../components/embedded-article/embedded-article.service';

@Component({
  providers: [
    {
      provide:  EmbeddedArticleService, useClass: EmbeddedArticleService
    }
  ],
  selector: 'app-ishimori-shotaro-letter',
  templateUrl: './ishimori-shotaro-letter.page.html',
  styleUrls: ['./ishimori-shotaro-letter.page.scss'],
})
export class IshimoriShotaroLetterPage implements OnInit {

  articleId = '100all';
  articleContent: Promise<SafeHtml>;

  constructor(public navController: NavController, private embeddedArticleService: EmbeddedArticleService) { }

  ngOnInit() {
    // console.log(`articleId ${this.articleId} EmbeddedArticleComponent#ngOnInit()`);
    this.articleContent = this.embeddedArticleService.retrieveArticleContent(this.articleId);
  }

}
