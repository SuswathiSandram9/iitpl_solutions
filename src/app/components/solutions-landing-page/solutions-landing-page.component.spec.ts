import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsLandingPageComponent } from './solutions-landing-page.component';

describe('SolutionsLandingPageComponent', () => {
  let component: SolutionsLandingPageComponent;
  let fixture: ComponentFixture<SolutionsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionsLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
