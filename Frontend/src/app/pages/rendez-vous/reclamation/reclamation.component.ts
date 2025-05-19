import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../service/reclamation.service';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  reclamationList: any[] = []; 
  currentReclamationId: number | null = null;

  constructor(
    private reclamationService: ReclamationService,
  ) {}

  ngOnInit(): void {
   this.findallreclamation();
  }


  findallreclamation(){
    this.reclamationService.findAll().subscribe({
      next:(data)=>{
        this.reclamationList=data;
      }
    })
  }

   updateStatus(reclamationId: number, status: string): void {
    this.reclamationService.updateStatusCommercial(reclamationId, status).subscribe({
      next: () => {
        console.log(`Statut mis à jour en ${status}`);
        this.findallreclamation(); 
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du statut :', err);
      }
    });
  }




  onDelete(id: number) {
    this.reclamationService.delete(id).subscribe({
      next: () =>{
        this.findallreclamation();
      }, 
      error: (err) => console.error("Erreur suppression", err)
    });
  }


}