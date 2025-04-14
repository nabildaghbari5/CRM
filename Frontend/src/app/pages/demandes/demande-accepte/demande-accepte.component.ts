import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../service/demande.service';

@Component({
  selector: 'app-demande-accepte',
  templateUrl: './demande-accepte.component.html',
  styleUrls: ['./demande-accepte.component.scss']
})
export class DemandeAccepteComponent implements OnInit {
  listDemande: any;

  constructor(
    private demandeService:DemandeService ,
  ) { }

  ngOnInit(): void {
    this.findDemandeByStatus();  

  }

  
  findDemandeByStatus(){
    this.demandeService.findDemandeByStatus().subscribe(
      (data) => {
         this.listDemande=data;
         console.log(this.listDemande)
      }
    )
  }


}
