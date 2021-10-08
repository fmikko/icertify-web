import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSuperadminComponent } from './portal-superadmin.component';

describe('PortalSuperadminComponent', () => {
  let component: PortalSuperadminComponent;
  let fixture: ComponentFixture<PortalSuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalSuperadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
