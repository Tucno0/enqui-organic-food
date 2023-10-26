import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';


@NgModule({
  declarations: [
    InicioPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
