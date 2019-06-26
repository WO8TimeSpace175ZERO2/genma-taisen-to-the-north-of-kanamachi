import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'yorinuki',
    loadChildren: './yorinuki/yorinuki.module#YorinukiPageModule'
  },
  { path: 'koramu',
    loadChildren: './koramu/koramu.module#KoramuPageModule' },
  { path: 'sagalist',
    loadChildren: './sagalist/sagalist.module#SagalistPageModule' },
  { path: 'ishimori-shotaro-letter',
  loadChildren: './ishimori-shotaro-letter/ishimori-shotaro-letter.module#IshimoriShotaroLetterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
