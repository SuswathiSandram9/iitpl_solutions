import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IitplComponent } from './solutions.component';

describe('IitplComponent', () => {
  let component: IitplComponent;
  let fixture: ComponentFixture<IitplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IitplComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IitplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
