import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-q-gen',
  standalone: false,
  templateUrl: './q-gen.component.html',
  styleUrl: './q-gen.component.css',
})
export class QGenComponent {
  readonly solution: SolutionDetail = {
    title: 'QGenX',
    subtitle: 'AI & Blockchain-Based Question Paper Generation System',
    route: '/qpgenx',
    brochureTitle: 'QPGenX Brochure',
    intro: [
      'QGEN is an advanced AI-powered question paper generation platform developed to help educational institutions create secure, balanced, and syllabus-compliant examination papers within minutes.',
    ],
    sectionHeading: 'Key Features',
    features: [
      {
        title: 'AI-Based Question Paper Generation',
        description:
          'Generate complete question papers automatically using syllabus inputs, learning outcomes, difficulty levels, and examination requirements.',
      },
      {
        title: 'Intelligent Question Bank Management',
        description:
          "Maintain centralized question repositories categorized by subjects, units, marks, Bloom's Taxonomy, and complexity levels.",
      },
      {
        title: 'Paper Editing & Customization',
        description:
          'Faculty members can review, edit, rearrange, and customize generated question papers before finalization.',
      },
      {
        title: 'Blockchain-Powered Security',
        description:
          'Question papers are protected through blockchain-enabled security mechanisms to prevent unauthorized access, tampering, or leakage.',
      },
      {
        title: 'Time Saving & Compliance',
        description:
          'Reduce manual effort significantly while ensuring examination standards, quality control, and institutional compliance.',
      },
    ],
    closing: [
      'QGEN transforms traditional examination preparation into a secure, intelligent, and efficient digital process.',
    ],
  };
}
