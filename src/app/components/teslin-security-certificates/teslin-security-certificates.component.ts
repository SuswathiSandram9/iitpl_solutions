import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-teslin-security-certificates',
  standalone: false,
  templateUrl: './teslin-security-certificates.component.html',
  styleUrl: './teslin-security-certificates.component.css',
})
export class TeslinSecurityCertificatesComponent {
  readonly solution: SolutionDetail = {
    title: 'Teslin Security Certificates',
    subtitle: '',
    route: '/teslin-security-certificates',
    brochureTitle: 'Teslin Security Certificates Brochure',
    intro: [
      'High-durability security certificates printed on specialized Teslin substrate for enhanced protection and longevity.',
    ],
    sectionHeading: 'Key Features',
    features: [
      {
        title: 'Tamper Resistant Material',
        description:
          'Highly durable material resistant to wear, damage, and unauthorized alterations.',
      },
      {
        title: 'Superior Print Quality',
        description:
          'Supports advanced security features and long-lasting print clarity.',
      },
      {
        title: 'Enhanced Security Features',
        description:
          'Compatible with holograms, QR codes, UV security elements, and serialization.',
      },
      {
        title: 'Weather & Water Resistance',
        description:
          'Provides long-term durability under various environmental conditions.',
      },
      {
        title: 'Trusted Authentication Medium',
        description:
          'Widely used for high-value academic and government-issued credentials.',
      },
    ],
    closing: [
      '',
    ],
    bannerImage: {
      src: 'assets/images/teslin.jpg',
      alt: 'Teslin banner',
    },
  };
}
