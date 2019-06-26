import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { EmbeddedArticleService } from './embedded-article.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  providers: [
    {
      provide:  EmbeddedArticleService, useClass: EmbeddedArticleService
    }
  ],
  selector: 'app-embedded-article',
  templateUrl: './embedded-article.component.html',
  styleUrls: ['./embedded-article.component.scss'],
})
export class EmbeddedArticleComponent implements OnInit {

  @Input() articleId: string;
  articleContent: Promise<SafeHtml>;

  constructor(private navParams: NavParams, private embeddedArticleService: EmbeddedArticleService) { }

  ngOnInit() {
      console.log(`articleId ${this.articleId} EmbeddedArticleComponent#ngOnInit()`);
      this.articleContent = this.embeddedArticleService.retrieveArticleContent(this.articleId);
  }

}
