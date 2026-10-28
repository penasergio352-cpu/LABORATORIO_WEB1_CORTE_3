import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from '../../interfaces/viaje.interface';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private readonly http: HttpClient) {}

  getAllViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${API_URL}/viajes`);
  }
}
