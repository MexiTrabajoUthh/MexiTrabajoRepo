import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedPermissionComponent } from './denied-permission.component';

describe('DeniedPermissionComponent', () => {
  let component: DeniedPermissionComponent;
  let fixture: ComponentFixture<DeniedPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeniedPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
