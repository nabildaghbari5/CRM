import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

 private apiUrl = 'http://localhost:8081/dashboard/api/stats'; // adapte l'URL selon ton backend

  constructor(private http: HttpClient) { }

  getDashboardStats(): Observable<any> {
    return this.http.get<any>(this.apiUrl); 
  }
}
