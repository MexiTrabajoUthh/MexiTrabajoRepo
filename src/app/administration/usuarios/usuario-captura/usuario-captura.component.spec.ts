import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCapturaComponent } from './usuario-captura.component';

describe('UsuarioCapturaComponent', () => {
  let component: UsuarioCapturaComponent;
  let fixture: ComponentFixture<UsuarioCapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCapturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
