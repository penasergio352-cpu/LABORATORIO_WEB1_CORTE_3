import { Component, OnInit, inject } from '@angular/core';
import { Viaje } from '../../interfaces/viaje.interface';
import { ViajesService } from '../../services/viajes/viajes.service';

@Component({
  selector: 'app-viajes-page',
  templateUrl: './viajes.page.html',
  styleUrl: './viajes.page.scss',
})
export class ViajesPage implements OnInit {
  private readonly viajesService = inject(ViajesService);

  viajes: Viaje[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadViajes();
  }

  loadViajes(): void {
    this.loading = true;
    this.error = '';

    this.viajesService.getAllViajes().subscribe({
      next: (viajes) => {
        this.viajes = viajes;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los viajes. Verifica la conexión con el servidor.';
        this.loading = false;
      },
    });
  }

  formatDate(value: string): string {
    const date = new Date(`${value.slice(0, 10)}T12:00:00`);
    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(date);
  }

  formatTime(value: string): string {
    return value.slice(0, 5);
  }
}
