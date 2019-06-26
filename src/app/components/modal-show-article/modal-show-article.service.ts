import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class ModalShowArticleService {

  // safeHtmlを読み込むためにDomSanitizerをインジェクト
  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  /**
   * 記事IDをキーにして静的HTMLを意図的にサニタイズせずに処理する(DomSanitizer#bypassSecurityTrustHtml)
   *  articleId
   * @return 非同期処理で静的HTMLを取得する必要があるためObservable<SafeHtml>インスタンスを返却する。
   */
  public async retrieveArticleContent(articleId: string): Promise<SafeHtml> {
    // articleContent = null;
    let safeHtml: SafeHtml = null;
    safeHtml = await this.httpClient.get('plainArticles/plainArticle-' + articleId + '.html', { responseType: 'text' })
                                                            .toPromise();
    // console.log(`記事ID:${articleId}★★ \n ${safeHtml}` );

    return safeHtml;
  }
}
