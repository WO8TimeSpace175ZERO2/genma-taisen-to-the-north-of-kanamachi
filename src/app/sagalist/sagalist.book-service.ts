import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SagaSeries } from './saga-series';
import { SagaBook } from './saga-book';
import { Observable } from 'rxjs';


@Injectable()
export class SagalistBookService {

    constructor(private http: HttpClient) { }

    public getSagaSeries(url: string): Observable<SagaSeries> {
        const sagaSeriesStr: Observable<SagaSeries> = this.http.get<SagaSeries>(url);
        return sagaSeriesStr;
    }



}
