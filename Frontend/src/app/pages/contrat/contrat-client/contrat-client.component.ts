import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ContratService } from '../service/contrat.service';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-contrat-client',
  templateUrl: './contrat-client.component.html',
  styleUrls: ['./contrat-client.component.scss']
})
export class ContratClientComponent implements OnInit {

  contratList: any[] = [];
  modalRef!: NgbModalRef;
  userId: any;  
  clientId:any
  currenContratId: number | null = null;
  selectedClientId!: number;
  listeClient:any
  selectedContrat:any
  constructor(
    private modalService: NgbModal,
    private contratService: ContratService,
    private authService: AuthentificationService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.findAllClient();
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.userId = userId;
      this.userService.findById(this.userId).subscribe({
        next:(data)=>{
            if(data.client !=null){
             this.clientId=data.client.id;
             this.getContratByClientId();  
            }
        }, 
        error:(error) =>{
            console.log(error.error)
        }
      
      })
      
    } else {
      console.error('Utilisateur non connecté ou ID manquant');
    }
  }

  findAllClient() {
    this.userService.findByRole('Client').subscribe({
      next: (result) => {
        this.listeClient =result ; 
      },
      error: (err) => console.error('Erreur lors de la récupération des commerciaux', err)
    });
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



  getContratByClientId() {
    this.contratService.findByClientId(this.clientId).subscribe({
      next: (data) => {
        this.contratList = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des contrats', err);
      }
    });
  }


}
