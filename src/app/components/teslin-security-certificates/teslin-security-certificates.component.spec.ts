import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslinSecurityCertificatesComponent } from './teslin-security-certificates.component';

describe('TeslinSecurityCertificatesComponent', () => {
  let component: TeslinSecurityCertificatesComponent;
  let fixture: ComponentFixture<TeslinSecurityCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeslinSecurityCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeslinSecurityCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
