import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KijiItems } from '../KijiItems';
import { KijiItem } from '../KijiItem';
import { Observable } from 'rxjs';
import { map , tap} from 'rxjs/operators';


@Injectable()
export class LinkColRetrieveService {

    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
      ];

    constructor(private http: HttpClient) { }

    public getLinkCol(url: string): Observable<KijiItem[]> {
        const linkColJsonStr: Observable<KijiItems> = this.http.get<KijiItems>(url);
        let linkColStr: Observable<KijiItem[]> = linkColJsonStr.pipe(
            map(linkCollectionJson =>  linkCollectionJson.kijiItems)
        );
        linkColStr = linkColStr.pipe(
            tap(kijiItems =>  kijiItems.forEach(kijiItem => kijiItem.icon = this.getRandomIcon(kijiItem.kijiId)))
        );
        return linkColStr;
    }

   private  getRandomIcon(kijiId: string) {
        const idxA = (kijiId as unknown as number) % this.icons.length;
        const idxB = Math.floor(Math.random() * this.icons.length);
        const iconName = this.icons[idxB ];
       //  console.log( '${idxA}  ${idxB} ★ icon:' + iconName);
        return iconName;
      }

}
