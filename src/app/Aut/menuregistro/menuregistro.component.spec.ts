import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuregistroComponent } from './menuregistro.component';

describe('MenuregistroComponent', () => {
  let component: MenuregistroComponent;
  let fixture: ComponentFixture<MenuregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
