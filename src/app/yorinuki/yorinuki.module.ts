import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { YorinukiPage } from './yorinuki.page';
import { ArticleComponent } from '../components/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: YorinukiPage
      },
      {
        path: 'article/:id',
        component: ArticleComponent
      }
    ])
  ],
  declarations: [YorinukiPage
                       , ArticleComponent]
})
export class YorinukiPageModule {}
