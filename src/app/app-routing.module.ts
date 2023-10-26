import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './landing/pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {
    path: '',
    component : InicioPageComponent
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
