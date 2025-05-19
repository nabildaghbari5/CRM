import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { ClientComponent } from './client/client.component';
import { ClientContratComponent } from './client-contrat/client-contrat.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'tableau_bord', 
    component:DashboardComponent
   }, 
  {
    path:'commercial', 
    component:CommercialComponent
   }, 
   {
    path:'client', 
    component:ClientComponent
   }, 
   {
    path:'client-contrat',  
    component:ClientContratComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
