import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-examination-documents',
  standalone: false,
  templateUrl: './examination-documents.component.html',
  styleUrl: './examination-documents.component.css',
})
export class ExaminationDocumentsComponent {
  readonly solution: SolutionDetail = {
    title: 'Examination Documents',
    subtitle: '',
    route: '/examination-documents',
    brochureTitle: 'Examination Documents Brochure',
    intro: [
      'Secure examination document printing solutions for colleges, universities, and autonomous institutions.',
    ],
    sectionHeading: 'Products',
    features: [
      { title: 'Semester Answer Booklets', description: '' },
      { title: 'Practical Examination Booklets', description: '' },
      { title: 'Engineering Drawing Booklets', description: '' },
      { title: 'Laboratory Record Books', description: '' },
      { title: 'Academic Registers', description: '' },
      { title: 'Examination Forms', description: '' },
    ],
    closing: [
      '',
    ],
    bannerImage: {
      src: 'assets/images/examination.jpg',
      alt: 'Examination documents banner',
    },
  };
}
