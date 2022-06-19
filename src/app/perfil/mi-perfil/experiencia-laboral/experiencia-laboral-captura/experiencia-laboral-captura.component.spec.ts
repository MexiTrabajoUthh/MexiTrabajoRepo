import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLaboralCapturaComponent } from './experiencia-laboral-captura.component';

describe('ExperienciaLaboralCapturaComponent', () => {
  let component: ExperienciaLaboralCapturaComponent;
  let fixture: ComponentFixture<ExperienciaLaboralCapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLaboralCapturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaLaboralCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
