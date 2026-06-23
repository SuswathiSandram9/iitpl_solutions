import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPrintingSolutionsComponent } from './security-printing-solutions.component';

describe('SecurityPrintingSolutionsComponent', () => {
  let component: SecurityPrintingSolutionsComponent;
  let fixture: ComponentFixture<SecurityPrintingSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecurityPrintingSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityPrintingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
