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
    { label: 'QGENX', route: '/qgenx' },
    { label: 'TRUSCHOLAR', route: '/truscholar' },
    { label: 'SECURITY PRINTING SOLUTIONS', route: '/security-printing-solutions' },
    { label: 'TESLIN SECURITY CERTIFICATES', route: '/teslin-security-certificates' },
    { label: 'ACADEMIC DOCUMENTS', route: '/academic-documents' },
    { label: 'EXAMINATION DOCUMENTS', route: '/examination-documents' },
  ];

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

  downloadPdf(): void {
    this.brochureDownload.downloadElementAsPdf(
      '.solution-detail-container',
      this.solution.brochureTitle
    );
  }
}
