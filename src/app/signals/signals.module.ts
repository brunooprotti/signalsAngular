import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserinfoPageComponent } from './pages/userinfo-page/userinfo-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserinfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
