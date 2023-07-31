import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'registro/:id', component: RegistroComponent},
  {path: 'registros', component:RegistrosComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
