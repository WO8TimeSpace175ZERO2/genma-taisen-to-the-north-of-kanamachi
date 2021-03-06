import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IshimoriShotaroLetterPage } from './ishimori-shotaro-letter.page';



const routes: Routes = [
  {
    path: '',
    component: IshimoriShotaroLetterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IshimoriShotaroLetterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class IshimoriShotaroLetterPageModule {}
