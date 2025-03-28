import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started-qgen',
  standalone: false,
  templateUrl: './getting-started-qgen.component.html',
  styleUrl: './getting-started-qgen.component.css'
})
export class GettingStartedQgenComponent {
  hoveredCard: string = '';

  cards = [
    {
      icon: 'bi-1-circle-fill',
      title: 'Input Guidelines',
      description:
        'Provide your requirements: subject, grade level, topics, and difficulty levels.',
      footerText: 'INPUT GUIDELINES',
      image: 'assets/images/input-guidelines.jpg',
    },
    {
      icon: 'bi-2-circle-fill',
      title: 'AI-Generated Papers',
      description: 'Let our AI generate a custom question paper tailored to your guidelines and curriculum.',
      footerText: 'AI-GENERATED PAPERS',
      image: 'assets/images/ai-generated-papers.jpg',
    },
    {
      icon: 'bi-3-circle-fill',
      title: 'Blockchain Safeguard',
      description:
        'Secure your generated question paper with our blockchain technology.',
      footerText: 'BLOCKCHAIN SAFEGUARD',
      image: 'assets/images/blockchain-safeguard.jpg',
    },
    {
      icon: 'bi-4-circle-fill',
      title: 'Finalize & Download',
      description:
        'Review, make any necessary edits, and download your final question paper.',
      footerText: 'FINALIZE & DOWNLOAD',
      image: 'assets/images/finalize-download.jpg',
    },
  ];
}
