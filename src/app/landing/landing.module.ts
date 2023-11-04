import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    InicioPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
