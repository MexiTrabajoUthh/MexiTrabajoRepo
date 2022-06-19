import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasLaboralesCapturaComponent } from './ofertas-laborales-captura.component';

describe('OfertasLaboralesCapturaComponent', () => {
  let component: OfertasLaboralesCapturaComponent;
  let fixture: ComponentFixture<OfertasLaboralesCapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasLaboralesCapturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasLaboralesCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
