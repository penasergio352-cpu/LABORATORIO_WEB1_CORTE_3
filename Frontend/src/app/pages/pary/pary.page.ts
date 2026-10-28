import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pary, Promotor } from '../../interfaces/pary.interface';
import { ParyService } from '../../services/pary/pary.service';

@Component({
  selector: 'app-pary-page',
  imports: [RouterLink],
  templateUrl: './pary.page.html',
  styleUrl: './pary.pages.scss',
})
export class ParyPage implements OnInit {
  private readonly paryService = inject(ParyService);

  parys: Pary[] = [];
  promotores: Promotor[] = [];

  paryLoading = true;
  promotoresLoading = true;

  paryError = '';
  promotoresError = '';

  ngOnInit(): void {
    this.loadParys();
    this.loadPromotores();
  }

  loadParys(): void {
    this.paryLoading = true;
    this.paryError = '';

    this.paryService.getAllPary().subscribe({
      next: (parys) => {
        this.parys = parys;
        this.paryLoading = false;
      },
      error: () => {
        this.paryError = 'No se pudieron cargar los registros.';
        this.paryLoading = false;
      },
    });
  }

  loadPromotores(): void {
    this.promotoresLoading = true;
    this.promotoresError = '';

    this.paryService.getAllPromotores().subscribe({
      next: (promotores) => {
        this.promotores = promotores;
        this.promotoresLoading = false;
      },
      error: () => {
        this.promotoresError = 'No se pudieron cargar los promotores.';
        this.promotoresLoading = false;
      },
    });
  }

}
