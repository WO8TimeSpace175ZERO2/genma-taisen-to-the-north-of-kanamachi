import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KirinukiList } from '../../KirinukiList';
import { Observable } from 'rxjs';


@Injectable()
export class ScrapbookKirinukiListService {

    constructor(private http: HttpClient) { }

    public getKirinukiList(url: string): Observable<KirinukiList> {
        const kirinukiListStr: Observable<KirinukiList> = this.http.get<KirinukiList>(url);
        return kirinukiListStr;
    }



}
