import { ContratService } from './../../contrat/service/contrat.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/account/auth/services/user.service';
import { ClientService } from '../../profils/service/client.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  listClient:any
  selectedClientId:any
  contratList:any
  constructor(
     private clientService:ClientService,
     private contratService:ContratService
  ) { }

   ngOnInit(): void {
    this.findAllClient();  
  }

  findAllClient(){
    this.clientService.getClientsWithContrats().subscribe({
      next:(data)=>{
        this.listClient=data;  
        console.log(data)
      },
      error:(error) => {
        console.log(error)
      }
    })
  }

   onFilterChange(): void {
    if (this.selectedClientId) {
      this.findHistorique();
    }
  }


   findHistorique(): void {
     this.contratService.findByClientId(this.selectedClientId).subscribe({
      next: (data) => {
        this.contratList = data;
        console.log(data)
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des contrats', err);
      }
    });
  }


}
