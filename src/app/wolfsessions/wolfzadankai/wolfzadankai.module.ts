import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WolfzadankaiPage } from './wolfzadankai.page';

const routes: Routes = [
  {
    path: '',
    component: WolfzadankaiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WolfzadankaiPage]
})
export class WolfzadankaiPageModule {}
