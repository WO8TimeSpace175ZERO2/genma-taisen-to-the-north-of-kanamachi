import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class ArticleService {

  // safeHtmlを読み込むためにDomSanitizerをインジェクト
  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  /**
   * 記事IDをキーにして静的HTMLを意図的にサニタイズせずに処理する(DomSanitizer#bypassSecurityTrustHtml)
   *  articleId
   * @return 非同期処理で静的HTMLを取得する必要があるためObservable<SafeHtml>インスタンスを返却する。
   */
  public async retrieveArticleContent(articleId: string): Promise<SafeHtml> {
    // articleContent = null;
    let tmpPromise: Promise<SafeHtml> = null;
    let safeHtml: SafeHtml = null;
    // tslint:disable-next-line:max-line-length
    tmpPromise = this.httpClient.get('https://wo8timespace175zero2.github.io/kgw-rsrc/plainArticles/plainArticle-' + articleId + '.html', { responseType: 'text' })
                                                            .toPromise();
    try {
      safeHtml = await tmpPromise;
    } catch (e) {
        // tslint:disable-next-line:no-unused-expression
       console && console.log && console.log(e);
       // tslint:disable-next-line:no-unused-expression
       window && window.alert && window.alert(e);
       const errRes = e as HttpErrorResponse;
        // tslint:disable-next-line:no-unused-expression
       window && window.alert && window.alert(` errorName: ${errRes.name}, url: ${errRes.url}, `
                                                                            + ` ok:${errRes.ok}, type: ${errRes.type},  `
                                                                            + ` errMsg: ${errRes.message}, status: ${errRes.status}, `
                                                                            + ` statusText: ${errRes.statusText}` );
    }
    // console.log(`記事ID:${articleId}★ \n ${safeHtml}` );
    return safeHtml;
  }
}
