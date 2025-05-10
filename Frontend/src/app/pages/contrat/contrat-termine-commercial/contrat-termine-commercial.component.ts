import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ContratService } from '../service/contrat.service';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-contrat-termine-commercial',
  templateUrl: './contrat-termine-commercial.component.html',
  styleUrls: ['./contrat-termine-commercial.component.scss']
})
export class ContratTermineCommercialComponent implements OnInit {
   contratList: any[] = [];
   modalRef!: NgbModalRef;
   userId: any;  
   commercialId:any
   currenContratId: number | null = null;
   selectedClientId!: number;
   selectedContrat:any
   constructor(
     private modalService: NgbModal,
     private contratService: ContratService,
     private authService: AuthentificationService,
     private userService:UserService
   ) {}
 
   ngOnInit(): void {
    const userId = this.authService.getCurrentUserId();
  this.findByStatus();
    if (userId) {
      this.userId = userId;
      this.userService.findById(this.userId).subscribe({
        next: (data) => {
          if (data.commercial != null) {
            this.commercialId = data.commercial.id;
              this.findByStatus();
          } else {
            console.warn('Aucun commercial lié à cet utilisateur.');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', error.error);
        }
      });
    } else {
      console.error('Utilisateur non connecté ou ID manquant');
    }
  }
  
  
   findByStatus(){
    this.contratService.findByStatusAndCommercial("Termine" , this.commercialId).subscribe({
      next:(data)=>{
        this.contratList=data; 
        console.log('":::::::::::::>>>>>>>>>>>>>>>' , this.contratList)
      }
      , 
      error:(error)=>{
        console.log(error)
      }
    })
   }
   
   openModal(content: any, contrat?: any) {
    this.selectedContrat=contrat;
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
  }
 
   closeModal() {
     if (this.modalRef) {
       this.modalRef.close();
     }
   }
 

   onDelete(rendezVousId: number): void {
     this.contratService.delete(rendezVousId).subscribe({
       next: () => {
         this.findByStatus();
       },
       error: (err) => {
         console.error('Erreur lors de la suppression', err);
       }
     });
   }

 
 
 }
 