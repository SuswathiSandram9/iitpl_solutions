import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmexsComponent } from './amexs.component';

describe('AmexsComponent', () => {
  let component: AmexsComponent;
  let fixture: ComponentFixture<AmexsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmexsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmexsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
