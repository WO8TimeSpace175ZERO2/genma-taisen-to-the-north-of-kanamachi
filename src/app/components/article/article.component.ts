import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService} from './article.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  providers: [
    {
      provide:  ArticleService, useClass: ArticleService
    }
  ],
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  id = '';
  articleContent: Promise<SafeHtml>;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
      this.route.params.subscribe(
        // パラメータ渡しルーティング時のsubscribeで処理するクロージャーに固めないと
        // 静的HTMLの非同期通信が無限ループを起こす
        params => {
                    this.id = params.id;
                    this.articleContent = this.articleService.retrieveArticleContent(params.id);
                  }
      );
  }

}
