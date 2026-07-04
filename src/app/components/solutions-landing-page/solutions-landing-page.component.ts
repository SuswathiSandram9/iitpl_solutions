import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solutions-landing-page',
  standalone: false,
  templateUrl: './solutions-landing-page.component.html',
  styleUrl: './solutions-landing-page.component.css'
})
export class SolutionsLandingPageComponent {
  cards = [
    {
      title: 'Image Innovation Technology Private Ltd.',
      description: 'Image Innovation Technology Private Ltd. builds practical digital solutions for educational institutions, universities, and organizations that need secure, efficient, and user-friendly systems.',
      link: '/solutions'
    },
    {
      title: 'Image Security Printers',
      description: 'An innovative AI-driven tool that automates the generation of curriculum-aligned question papers, customized to meet specific needs.',
      link: '/image-security-printers'
    },
    {
      title: 'Kronnex Digital and AI',
      description: 'View the digital and AI solutions in action.',
      link: 'https://knx-portfolio-bay.vercel.app/'
    }
  ];

  constructor(private router: Router) {}

  openLink(link: string): void {
    if (!link) {
      return;
    }

    if (/^https?:\/\//i.test(link)) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    this.router.navigateByUrl(link);
  }
}
