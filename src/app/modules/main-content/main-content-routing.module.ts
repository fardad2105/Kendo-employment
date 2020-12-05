import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content.component';
import { MainPageComponent } from './components/main-page/main-page.component';
const routes: Routes = [
  // { path: '', component: MainContentComponent },
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }
