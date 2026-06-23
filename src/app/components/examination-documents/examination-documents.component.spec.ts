import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDocumentsComponent } from './examination-documents.component';

describe('ExaminationDocumentsComponent', () => {
  let component: ExaminationDocumentsComponent;
  let fixture: ComponentFixture<ExaminationDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminationDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
