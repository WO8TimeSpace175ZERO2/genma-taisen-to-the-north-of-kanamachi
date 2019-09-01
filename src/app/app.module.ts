import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ArticleComponent } from './components/article/article.component';
import { ModalShowArticleComponent } from './components/modal-show-article/modal-show-article.component';
import { EmbeddedArticleComponent } from './components/embedded-article/embedded-article.component';
import { ArticleService} from './components/article/article.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ModalShowArticleComponent, EmbeddedArticleComponent, ArticleComponent],
  entryComponents: [ModalShowArticleComponent, EmbeddedArticleComponent, ArticleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide:  ArticleService, useClass: ArticleService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
