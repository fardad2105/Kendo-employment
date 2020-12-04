import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './Shared.component';
import { CardComponent } from './components/Card/Card.component';
import { DropdownDirective } from './directives/Dropdown.directive';
import { TimesDirective } from './directives/Times.directive';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SharedComponent, CardComponent, DropdownDirective, TimesDirective],
  exports: [CardComponent, DropdownDirective, TimesDirective]
})
export class SharedModule { }
