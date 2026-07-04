import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-truscholar',
  standalone: false,
  templateUrl: './truscholar.component.html',
  styleUrl: './truscholar.component.css'
})
export class TruscholarComponent {
readonly solution: SolutionDetail = {
    title: 'Tru-Scholar',
    subtitle: 'Digital Academic Document Verification & Distribution Platform',
    route: '/truscholar',
    brochureTitle: 'Tru-Scholar Brochure',
    intro: [
      "TruScholar is IITPL's next-generation credential management platform that enables educational institutions to issue, verify, and distribute academic documents securely using AI, Blockchain, and IoT technologies.",
    ],
    sectionHeading: 'Key Features',
    features: [
      {
        title: 'Digital Certificate Issuance & Verification',
        description:
          'Issue digitally signed certificates that can be instantly verified by employers, institutions, and stakeholders worldwide.',
      },
      {
        title: 'Blockchain-Based Credential Management',
        description:
          "Store academic credentials securely on blockchain networks to ensure immutability, authenticity, and long-term verification.",
      },
      {
        title: 'IoT-Based Voice Detection Security',
        description:
          'Enhance certificate security through voice-enabled authentication technology, adding an additional layer of protection against forgery.',
      },
      {
        title: 'Academic Document Distribution',
        description:
          'Digitally distribute certificates, transcripts, marksheets, and academic credentials through a secure online ecosystem.',
      },
      {
        title: 'End-to-End Digital Transformation',
        description:
          'Support institutions in transitioning from traditional paper-based documentation to secure digital academic ecosystems.',
      },
    ],
    closing: [
      'TruScholar enables institutions to establish trust, eliminate credential fraud, and deliver secure academic records globally.',
    ],
    bannerImage: {
      src: 'assets/images/truscholar.jpg',
      alt: 'TruScholar banner',
    },
  };
}
