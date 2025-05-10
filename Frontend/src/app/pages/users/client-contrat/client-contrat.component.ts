import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../profils/service/client.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-client-contrat',
  templateUrl: './client-contrat.component.html',
  styleUrls: ['./client-contrat.component.scss']
})
export class ClientContratComponent implements OnInit {
   listClient:any
  constructor(
    private clientService:ClientService,
    private userService:UserService
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

  
  updateStatus(userId, idStatus) {
    this.userService
      .putStatusUsers(userId, idStatus, this.listClient[0])
      .subscribe((response) => {
        this.findAllClient();
      });
  }



}
