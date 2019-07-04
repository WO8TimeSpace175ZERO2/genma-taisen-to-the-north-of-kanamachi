import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService} from '../components/article/article.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-koramudetails',
  templateUrl: './koramudetails.page.html',
  styleUrls: ['./koramudetails.page.scss'],
})
export class KoramudetailsPage implements OnInit {
  articleId = null;
  articleTitle = null;
  createdDate = null;
  modifiedDate = null;
  articleContent: Promise<SafeHtml>;
  constructor(private activatedRoute: ActivatedRoute , private articleService: ArticleService) { }

  ngOnInit() {
    // https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/
    this.articleId = this.activatedRoute.snapshot.paramMap.get('articleId');
    this.articleTitle = this.activatedRoute.snapshot.paramMap.get('articleTitle');
    this.createdDate = this.activatedRoute.snapshot.paramMap.get('createdDate');
    this.modifiedDate = this.activatedRoute.snapshot.paramMap.get('modifiedDate');
    this.articleContent = this.articleService.retrieveArticleContent(this.articleId );
  }

}
