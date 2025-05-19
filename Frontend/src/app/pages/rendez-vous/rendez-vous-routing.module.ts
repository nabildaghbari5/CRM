import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendezClientComponent } from './rendez-client/rendez-client.component';
import { RendezAdminComponent } from './rendez-admin/rendez-admin.component';
import { RendezCommercialComponent } from './rendez-commercial/rendez-commercial.component';
import { ReclamationClientComponent } from './reclamation-client/reclamation-client.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  {
    path:"rendez-client",
    component:RendezClientComponent
  },
  {
    path:"rendez-admin",
    component:RendezAdminComponent
  },
  {
    path:"rendez-commerical",
    component:RendezCommercialComponent
  } , 
  {
    path:"reclamation-client",
    component:ReclamationClientComponent
  },
  {
    path:"reclamation-commercial",
    component:ReclamationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }
