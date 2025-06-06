import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { RendezClientComponent } from './rendez-client/rendez-client.component';
import { RendezCommercialComponent } from './rendez-commercial/rendez-commercial.component';
import { RendezAdminComponent } from './rendez-admin/rendez-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReclamationClientComponent } from './reclamation-client/reclamation-client.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


@NgModule({
  declarations: [
    RendezClientComponent,
    RendezCommercialComponent,
    RendezAdminComponent,
    ReclamationClientComponent,
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    RendezVousRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbDropdownModule,
  ]
})
export class RendezVousModule { }
