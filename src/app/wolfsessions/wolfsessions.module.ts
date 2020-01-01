import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WolfsessionsPage } from './wolfsessions.page';

const routes: Routes = [
  {
    path: '',
    component: WolfsessionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WolfsessionsPage]
})
export class WolfsessionsPageModule {}
