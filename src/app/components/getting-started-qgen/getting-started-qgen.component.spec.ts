import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedQgenComponent } from './getting-started-qgen.component';

describe('GettingStartedQgenComponent', () => {
  let component: GettingStartedQgenComponent;
  let fixture: ComponentFixture<GettingStartedQgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GettingStartedQgenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettingStartedQgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
