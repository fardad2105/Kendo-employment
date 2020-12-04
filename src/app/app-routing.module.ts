import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
  // { path: 'SideBar', loadChildren: () => import('./modules/side-bar/side-bar.module').then(m => m.SideBarModule) },
  {path: 'MainContent', loadChildren: () => import('./modules/main-content/main-content.module').then(m => m.MainContentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
