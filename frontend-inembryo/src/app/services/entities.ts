import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  private apiUrl = 'http://localhost:3000/api/organizations'; // L'indirizzo del tuo backend

  constructor(private http: HttpClient) {}

  // Recupera tutti gli enti
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Aggiunge un nuovo ente
  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Aggiorna un ente
  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Elimina un ente
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}