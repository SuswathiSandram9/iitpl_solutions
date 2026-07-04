import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BrochureDownloadService } from '../../services/brochure-download.service';

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionImage {
  src: string;
  alt: string;
  afterFeatureIndex?: number;
}

export interface SolutionDetail {
  title: string;
  subtitle: string;
  route: string;
  brochureTitle: string;
  intro: string[];
  sectionHeading?: string;
  features: SolutionFeature[];
  closing?: string[];
  bullets?: string[];
  image?: SolutionImage;
  bannerImage?: SolutionImage;
}

@Component({
  selector: 'app-solution-detail',
  standalone: false,
  templateUrl: './solution-detail.component.html',
  styleUrl: './solution-detail.component.css',
})
export class SolutionDetailComponent implements AfterViewInit {
  @Input({ required: true }) solution!: SolutionDetail;
  @ViewChild('container') private container?: ElementRef<HTMLElement>;

  readonly solutionTabs = [
    { label: 'AMEXS', route: '/amexs' },
    { label: 'QPGENX', route: '/qpgenx' },
    { label: 'TRUSCHOLAR', route: '/truscholar' },
    { label: 'SECURITY PRINTING SOLUTIONS', route: '/security-printing-solutions' },
    { label: 'TESLIN SECURITY CERTIFICATES', route: '/teslin-security-certificates' },
    { label: 'ACADEMIC DOCUMENTS', route: '/academic-documents' },
    { label: 'EXAMINATION DOCUMENTS', route: '/examination-documents' },
  ];

  readonly backRouteBySolution: Record<string, string> = {
    '/amexs': '/iitpl',
    '/qpgenx': '/iitpl',
    '/truscholar': '/iitpl',
    '/security-printing-solutions': '/isp',
    '/teslin-security-certificates': '/isp',
    '/academic-documents': '/isp',
    '/examination-documents': '/isp',
  };

  constructor(private brochureDownload: BrochureDownloadService) {}

  ngAfterViewInit(): void {
    const header = document.getElementById('sticky-header');

    if (header && this.container) {
      this.container.nativeElement.style.paddingTop = `${header.offsetHeight}px`;
    }
  }

  shouldShowImageAfter(featureIndex: number): boolean {
    return this.solution.image?.afterFeatureIndex === featureIndex;
  }

  getBackRoute(): string {
    return this.backRouteBySolution[this.solution.route] || '/iitpl';
  }

  downloadPdf(): void {
    this.brochureDownload.downloadElementAsPdf(
      '.solution-detail-container',
      this.solution.brochureTitle
    );
  }
}
