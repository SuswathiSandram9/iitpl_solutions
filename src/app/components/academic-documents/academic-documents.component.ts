import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-academic-documents',
  standalone: false,
  templateUrl: './academic-documents.component.html',
  styleUrl: './academic-documents.component.css',
})
export class AcademicDocumentsComponent {
  readonly solution: SolutionDetail = {
    title: 'Academic Documents',
    subtitle: '',
    route: '/academic-documents',
    brochureTitle: 'Academic Documents Brochure',
    intro: [
      'Comprehensive printing solutions for educational institutions covering certificates, transcripts, marksheets, and examination records.',
    ],
    sectionHeading: 'Products',
    features: [
      { title: 'Degree Certificates', description: '' },
      { title: 'Provisional Certificates', description: '' },
      { title: 'Grade Cards', description: '' },
      { title: 'Consolidated Mark Statements', description: '' },
      { title: 'Transcripts', description: '' },
      { title: 'Transfer Certificates', description: '' },
      { title: 'Migration Certificates', description: '' },
      { title: 'Rank Certificates', description: '' },
      { title: 'Diploma Certificates', description: '' },
      { title: 'Course Completion Certificates', description: '' },
      { title: 'Hall Tickets', description: '' },
      { title: 'Student ID Cards', description: '' },
    ],
    closing: [
      '',
    ],
  };
}
