import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  public readonly postfixTitle = '金町の北上で幻魔大戦を叫んだけもの';
  public readonly postfixDescription = '日本初のIonic/Angular製モバイルファースト（スマホ対応SPA）幻魔大戦ブログ。幻魔大戦 平井和正 石ノ森章太郎 石森章太郎  #幻魔大戦 #平井和正 #石森章太郎 #石ノ森章太郎';


  constructor(
    private title: Title,
    private router: Router,
    private meta: Meta
  ) {}

  setPage(config: {
    title?: string;
    skipTitlePostfix?: boolean;
    skipDescPostfix?: boolean;
    metaDesc?: string;
    metaImg?: string;
  }) {
    const postfixTitle = config.skipTitlePostfix ? null : this.postfixTitle;
    const postfixDesc = config.skipDescPostfix ? null : this.postfixDescription;

    this.meta.updateTag({ property: 'og:url', content: this.getCurrentPath() });

    // titleの設定
    const title = (!config.title ? '' : config.title)  + ( config.title ? ' | '  : ''  ) + ( !postfixTitle ?  ''  :   postfixTitle );
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });

   // descriptionの設定
    const description = (!config.metaDesc ? '' : config.metaDesc) + (config.metaDesc ? ' | ' : '' ) + ( !postfixDesc ? '' : postfixDesc );
    this.meta.updateTag({ name: 'description', content: description   });
    this.meta.updateTag({ property: 'og:description', content: description });


    if (config.metaImg) {
      this.meta.updateTag({ property: 'og:image', content: config.metaImg });
      this.meta.updateTag({ name: 'twitter:image', content: config.metaImg });
    }

    document.dispatchEvent(new Event('prerender-ready'));

    // tslint:disable-next-line
    if (!environment.production || !window['gtag']) return;

    // gtag('config', this.trackingID, {
    //   'page-title': config.title,
    //   'page-path': this.getCurrentPath(false)
    // });
  }

  getCurrentPath(includeBaseUrl = true) {
    const prefix = includeBaseUrl ? environment.baseUrl : '';
    return prefix + this.router.url;
  }

  scrollWindowTo(target, duration) {
    const start = window.pageYOffset;
    const dist = target - start;
    const steps = 20;
    let current = 0;

    const transitionTiming = (t, b, c, d) => {
      t /= d / 2;
      // tslint:disable-next-line:curly
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      // tslint:disable-next-line:curly
      if (current >= duration) return;

      current += steps;
      const pos = transitionTiming(current, start, dist, duration);

      window.scrollTo(0, pos);

      requestAnimationFrame(animateScroll);
    };

    animateScroll();
  }
}
