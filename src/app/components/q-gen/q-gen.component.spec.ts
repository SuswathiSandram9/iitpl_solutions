import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QGenComponent } from './q-gen.component';

describe('QGenComponent', () => {
  let component: QGenComponent;
  let fixture: ComponentFixture<QGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
