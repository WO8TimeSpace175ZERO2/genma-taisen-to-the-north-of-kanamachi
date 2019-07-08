import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KoramudetailsPage } from './koramudetails.page';

const routes: Routes = [
  {
    path: '',
    component: KoramudetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KoramudetailsPage]
})
export class KoramudetailsPageModule {}
