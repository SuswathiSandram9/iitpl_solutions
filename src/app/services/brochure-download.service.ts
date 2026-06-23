import { Injectable } from '@angular/core';

type SolutionBrochure = {
  title: string;
  subtitle: string;
  overview: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class BrochureDownloadService {
  downloadElementAsPdf(selector: string, title: string): void {
    const sourceElement = document.querySelector(selector);

    if (!sourceElement) {
      return;
    }

    const printableContent = sourceElement.cloneNode(true) as HTMLElement;
    printableContent.removeAttribute('style');
    printableContent
      .querySelectorAll('.no-print, button, script')
      .forEach((element) => element.remove());

    const printWindow = window.open('', '_blank', 'width=900,height=700');

    if (!printWindow) {
      return;
    }

    printWindow.document.write(
      this.createHtmlBrochure(printableContent.outerHTML, title)
    );
    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
    }, 300);
  }

  private readonly brochures: Record<string, SolutionBrochure> = {
    amexs: {
      title: 'AMEXS',
      subtitle: 'Autonomous Management and Examination System',
      overview:
        'AMEXS simplifies educational management with secure online examinations, ERP workflows, analytics, and future-ready institutional tools.',
      sections: [
        {
          heading: 'Online Examination Platform',
          body: 'Conduct secure and customizable online exams with automated invigilation, anti-cheating controls, and instant evaluation.',
        },
        {
          heading: 'ERP for Schools and Colleges',
          body: 'Manage fees, attendance, timetables, resources, administration, and academic operations from one integrated platform.',
        },
        {
          heading: 'Analytics and Reporting',
          body: 'Access performance insights and reports that help institutions make informed operational and academic decisions.',
        },
        {
          heading: 'Secure Data Handling',
          body: 'Use AI and blockchain-enabled methods to improve privacy, security, and trust across institutional data workflows.',
        },
      ],
    },
    qpgenx: {
      title: 'QPGenX',
      subtitle: 'AI and Blockchain-Based Question Paper Generation System',
      overview:
        'QPGenX helps institutions create secure, balanced, syllabus-compliant question papers quickly while preserving review and editorial control.',
      sections: [
        {
          heading: 'AI-Based Question Paper Generation',
          body: 'Generate question papers using syllabus inputs, learning outcomes, difficulty levels, marks, and examination requirements.',
        },
        {
          heading: 'Question Bank Management',
          body: 'Maintain centralized question repositories categorized by subject, unit, marks, complexity, and Bloom taxonomy levels.',
        },
        {
          heading: 'Paper Editing and Customization',
          body: 'Review, edit, rearrange, and customize generated papers before finalization.',
        },
        {
          heading: 'Blockchain-Powered Security',
          body: 'Protect question papers with security mechanisms that help prevent unauthorized access, tampering, or leakage.',
        },
      ],
    },
    'doc-chain': {
      title: 'DOC-CHAIN',
      subtitle: 'AI-Powered Document Verification',
      overview:
        'DOC-CHAIN supports secure document authenticity checks with verification workflows designed for academic and administrative records.',
      sections: [
        {
          heading: 'Document Authenticity',
          body: 'Verify certificates, transcripts, and institutional documents through secure validation workflows.',
        },
        {
          heading: 'Tamper Detection',
          body: 'Help identify modified or suspicious records before they are accepted into official processes.',
        },
        {
          heading: 'Audit Trail',
          body: 'Maintain traceable verification history for stronger accountability and compliance.',
        },
      ],
    },
    'uni-pass': {
      title: 'UNI-PASS',
      subtitle: 'Universal Authentication System',
      overview:
        'UNI-PASS provides a unified access and authentication experience for users across institutional systems and services.',
      sections: [
        {
          heading: 'Unified Access',
          body: 'Allow users to access multiple services through a simplified authentication flow.',
        },
        {
          heading: 'Secure Identity',
          body: 'Support stronger identity validation for students, staff, administrators, and stakeholders.',
        },
        {
          heading: 'Easy Integration',
          body: 'Designed to connect with academic and operational systems with minimal friction.',
        },
      ],
    },
    'e-procure': {
      title: 'E-PROCURE',
      subtitle: 'Digital Procurement Support',
      overview:
        'E-PROCURE helps institutions streamline procurement processes with transparent, organized, and efficient digital workflows.',
      sections: [
        {
          heading: 'Procurement Workflow',
          body: 'Digitize purchase requests, approvals, vendor interactions, and procurement tracking.',
        },
        {
          heading: 'Transparency',
          body: 'Improve visibility across procurement stages and reduce manual follow-up.',
        },
        {
          heading: 'Operational Efficiency',
          body: 'Reduce paperwork and support faster procurement decisions for institutional teams.',
        },
      ],
    },
  };

  downloadSolutionPdf(solutionKey: string): void {
    const brochure = this.brochures[solutionKey];

    if (!brochure) {
      return;
    }

    const printWindow = window.open('', '_blank', 'width=900,height=700');

    if (!printWindow) {
      return;
    }

    printWindow.document.write(this.createPrintableHtml(brochure));
    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
    }, 300);
  }

  private createPrintableHtml(brochure: SolutionBrochure): string {
    const sections = brochure.sections
      .map(
        (section) => `
          <section>
            <h2>${section.heading}</h2>
            <p>${section.body}</p>
          </section>
        `
      )
      .join('');

    return `
      <!doctype html>
      <html>
        <head>
          <title>${brochure.title} Brochure</title>
          <style>
            body {
              margin: 0;
              padding: 48px;
              color: #111111;
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }

            .brand {
              margin-bottom: 28px;
              padding-bottom: 18px;
              border-bottom: 2px solid #111111;
            }

            h1 {
              margin: 0 0 8px;
              font-size: 34px;
              letter-spacing: 0;
            }

            .subtitle {
              margin: 0;
              font-size: 18px;
              font-weight: 700;
            }

            .overview {
              margin: 0 0 28px;
              font-size: 15px;
            }

            section {
              margin-bottom: 22px;
              page-break-inside: avoid;
            }

            h2 {
              margin: 0 0 6px;
              font-size: 19px;
            }

            p {
              margin: 0;
              font-size: 14px;
            }

            .footer {
              margin-top: 34px;
              padding-top: 14px;
              border-top: 1px solid #dddddd;
              font-size: 12px;
              color: #555555;
            }

            @media print {
              body {
                padding: 32px;
              }
            }
          </style>
        </head>
        <body>
          <div class="brand">
            <h1>${brochure.title}</h1>
            <p class="subtitle">${brochure.subtitle}</p>
          </div>
          <p class="overview">${brochure.overview}</p>
          ${sections}
          <p class="footer">Image Innovation Technology Private Ltd.</p>
        </body>
      </html>
    `;
  }

  private createHtmlBrochure(content: string, title: string): string {
    const styles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((element) => element.outerHTML)
      .join('');

    return `
      <!doctype html>
      <html>
        <head>
          <title>${title}</title>
          <base href="${window.location.origin}/">
          ${styles}
          <style>
            body {
              margin: 0;
              color: #111111;
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }

            h1 {
              margin: 0 0 14px;
              font-size: 34px;
              font-weight: 800;
            }

            h2 {
              margin: 28px 0 10px;
              font-size: 24px;
              font-weight: 800;
            }

            h3 {
              margin: 22px 0 8px;
              font-size: 18px;
              font-weight: 700;
            }

            p,
            li {
              font-size: 14px;
            }

            p {
              margin: 0 0 14px;
            }

            ul {
              padding-left: 22px;
            }

            img {
              max-width: 100%;
              height: auto;
              margin: 14px 0;
              border-radius: 8px;
            }

            a {
              color: #111111;
              text-decoration: none;
            }

            .feature-img {
              display: block;
              max-width: 360px;
            }

            @page {
              margin: 18mm;
            }

            @media print {
              body {
                padding: 0;
              }

              .solutions-section {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;
  }
}
