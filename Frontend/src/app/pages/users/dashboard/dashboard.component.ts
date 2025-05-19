import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stats!: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.dashboardService.getDashboardStats().subscribe({
      next: (data) => {
        this.stats = data;
        console.log(data)
      },
      error: (err) => {
        console.error('Erreur lors du chargement des statistiques', err);
      }
    });
  }
}