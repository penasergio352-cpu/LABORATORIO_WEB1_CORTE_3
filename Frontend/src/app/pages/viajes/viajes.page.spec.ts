import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ViajesService } from '../../services/viajes/viajes.service';
import { ViajesPage } from './viajes.page';

describe('ViajesPage', () => {
  let fixture: ComponentFixture<ViajesPage>;
  let component: ViajesPage;
  const viajesService = jasmine.createSpyObj('ViajesService', ['getAllViajes']);

  beforeEach(async () => {
    viajesService.getAllViajes.calls.reset();
    viajesService.getAllViajes.and.returnValue(
      of([{ id_viaje: 1, fecha: '2026-11-01', hora: '08:00:00' }])
    );

    await TestBed.configureTestingModule({
      imports: [ViajesPage],
      providers: [{ provide: ViajesService, useValue: viajesService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads and displays trips from the backend service', () => {
    expect(viajesService.getAllViajes).toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('VIAJE #1');
    expect(fixture.nativeElement.textContent).toContain('08:00');
    expect(fixture.nativeElement.textContent).toContain('1 viaje');
  });

  it('shows an error and allows retrying when the request fails', () => {
    viajesService.getAllViajes.and.returnValue(throwError(() => new Error('network error')));

    component.loadViajes();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No se pudieron cargar los viajes');

    const retryButton = fixture.nativeElement.querySelector('.retry-button') as HTMLButtonElement;
    retryButton.click();

    expect(viajesService.getAllViajes).toHaveBeenCalledTimes(3);
  });
});
