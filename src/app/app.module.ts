import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [AppComponent, ModalShowArticleComponent, EmbeddedArticleComponent, ArticleComponent],
  entryComponents: [ModalShowArticleComponent, EmbeddedArticleComponent, ArticleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
