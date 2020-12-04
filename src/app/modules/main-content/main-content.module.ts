import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './main-content.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [MainContentComponent, MainHeaderComponent, MainPageComponent],
  imports: [
    CommonModule,
    MainContentRoutingModule
  ]
})
export class MainContentModule { }
