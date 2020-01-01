import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService} from '../../components/article/article.service';
import { PageService } from '../../services/page.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable, from } from 'rxjs';
import { map,  find } from 'rxjs/operators';
import { KijiItem } from '../../KijiItem';
import KijiItemsJson from '../../const/wolfsessions.json';

@Component({
  selector: 'app-wolfzadankai',
  templateUrl: './wolfzadankai.page.html',
  styleUrls: ['./wolfzadankai.page.scss'],
})
export class WolfzadankaiPage implements OnInit {

  kijiItem: KijiItem;
  wolfzadankaiId = null;
  articleContent: Promise<SafeHtml>;
  constructor(private activatedRoute: ActivatedRoute ,
              private articleService: ArticleService,
              private pageSvc: PageService) {
    }

  ngOnInit() {
    this.wolfzadankaiId = this.activatedRoute.snapshot.paramMap.get('wolfzadankaiId');

    this.kijiItem = KijiItemsJson.kijiItems.find((kijiItem) => kijiItem.kijiId === this.wolfzadankaiId);
    const title = this.kijiItem.title;
    const metaDesc =  this.kijiItem.note;
    const metaImg = this.kijiItem.metaImageUrl;
    this.pageSvc.setPage({ title, metaDesc, metaImg });

    this.articleContent = this.articleService.retrieveArticleContent(this.wolfzadankaiId );
  }

}
