import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KijiItems } from '../KijiItems';
import { Observable } from 'rxjs';


@Injectable()
export class KoramuArticlesService {

    constructor(private http: HttpClient) { }

    public getKoramuArticles(url: string): Observable<KijiItems> {
        const koramuArticleList: Observable<KijiItems> = this.http.get<KijiItems>(url);
        return koramuArticleList;
    }



}
