import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScrapbookPage } from './scrapbook.page';

import { KirinukiComponent } from './kirinuki/kirinuki.component';
import { KirinukiModalContentComponent } from './kirinuki-modal-content/kirinuki-modal-content.component';



const routes: Routes = [
  {
    path: '',
    component: ScrapbookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [KirinukiModalContentComponent],
  exports: [],
  declarations: [ScrapbookPage,  KirinukiComponent, KirinukiModalContentComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ScrapbookPageModule {}
