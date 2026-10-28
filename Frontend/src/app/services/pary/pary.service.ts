import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pary, Promotor } from '../../interfaces/pary.interface';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ParyService {
  constructor(private readonly http: HttpClient) {}

  getAllPary(): Observable<Pary[]> {
    return this.http.get<Pary[]>(`${API_URL}/pary`);
  }

  getAllPromotores(): Observable<Promotor[]> {
    return this.http.get<Promotor[]>(`${API_URL}/pary/promotores`);
  }
}
