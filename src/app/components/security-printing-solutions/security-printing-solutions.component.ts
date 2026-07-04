import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-security-printing-solutions',
  standalone: false,
  templateUrl: './security-printing-solutions.component.html',
  styleUrl: './security-printing-solutions.component.css',
})
export class SecurityPrintingSolutionsComponent {
  readonly solution: SolutionDetail = {
    title: 'Security Printing Solutions',
    subtitle: '',
    route: '/security-printing-solutions',
    brochureTitle: 'Security Printing Solutions Brochure',
    intro: [
      'Advanced security printing solutions designed to protect academic documents from duplication, tampering, and counterfeiting.',
    ],
    sectionHeading: 'Key Features',
    features: [
      {
        title: 'Voice Detection Security Certificates',
        description:
          'Certificates embedded with voice-enabled authentication technology that instantly verifies document authenticity.',
      },
      {
        title: 'UV Invisible Ink Security',
        description:
          'Specialized invisible security ink visible only under UV light, providing an additional verification layer.',
      },
      {
        title: 'MICR Security Numbering',
        description:
          'Unique serial numbering system ensuring traceability and authenticity of every document.',
      },
      {
        title: 'Guilloche Security Design',
        description:
          'Complex anti-counterfeit security patterns integrated into academic certificates.',
      },
      {
        title: 'Multi-Layer Authentication',
        description:
          'Combination of security printing technologies to safeguard critical academic records.',
      },
    ],
    closing: [
      '',
    ],
    bannerImage: {
      src: 'assets/images/security.jpg',
      alt: 'Security printing banner',
    },
  };
}
