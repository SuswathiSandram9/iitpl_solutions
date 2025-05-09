import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSecurityPrintersComponent } from './image-security-printers.component';

describe('ImageSecurityPrintersComponent', () => {
  let component: ImageSecurityPrintersComponent;
  let fixture: ComponentFixture<ImageSecurityPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSecurityPrintersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSecurityPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
