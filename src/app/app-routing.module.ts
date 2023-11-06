import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './landing/pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
    component: InicioPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
  //dsdsdsds
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
