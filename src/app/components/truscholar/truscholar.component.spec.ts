import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruscholarComponent } from './truscholar.component';

describe('TruscholarComponent', () => {
  let component: TruscholarComponent;
  let fixture: ComponentFixture<TruscholarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruscholarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruscholarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
