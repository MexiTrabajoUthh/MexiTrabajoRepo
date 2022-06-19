import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerRecuperacionComponent } from './obtener-recuperacion.component';

describe('ObtenerRecuperacionComponent', () => {
  let component: ObtenerRecuperacionComponent;
  let fixture: ComponentFixture<ObtenerRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerRecuperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
