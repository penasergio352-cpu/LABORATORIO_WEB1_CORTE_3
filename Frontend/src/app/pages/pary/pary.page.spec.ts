import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ParyPage } from './pary.page';
import { ParyService } from '../../services/pary/pary.service';

describe('ParyPage', () => {
  let component: ParyPage;
  let fixture: ComponentFixture<ParyPage>;
  const paryService = jasmine.createSpyObj('ParyService', ['getAllPary', 'getAllPromotores']);

  beforeEach(async () => {
    paryService.getAllPary.and.returnValue(
      of([{ id: 1, nombre: 'Evento de prueba', lugar: 'Cali' }])
    );
    paryService.getAllPromotores.and.returnValue(
      of([{ id: 1, nombre: 'Promotor de prueba', fecha_nacimiento: '1990-01-01', promedio: 4.5 }])
    );
    await TestBed.configureTestingModule({
      imports: [ParyPage],
      providers: [
        { provide: ParyService, useValue: paryService },
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads records from the backend services and displays them', () => {
    expect(paryService.getAllPary).toHaveBeenCalled();
    expect(paryService.getAllPromotores).toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('Evento de prueba');
    expect(fixture.nativeElement.textContent).toContain('Promotor de prueba');
  });
});
