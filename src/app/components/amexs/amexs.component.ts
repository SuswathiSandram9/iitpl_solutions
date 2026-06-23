import { Component } from '@angular/core';
import { SolutionDetail } from '../solution-detail/solution-detail.component';

@Component({
  selector: 'app-amexs',
  standalone: false,
  templateUrl: './amexs.component.html',
  styleUrl: './amexs.component.css',
})
export class AmexsComponent {
  readonly solution: SolutionDetail = {
    title: 'AMEXS',
    subtitle: 'Amexs, an autonomous college software that helps with managerial tasks',
    route: '/amexs',
    brochureTitle: 'AMEXS Brochure',
    intro: [
      "AMEX, or the Autonomous Management and Examination System, is one of ITP's flagship solutions designed to simplify and enhance educational management. Here's a deeper dive into its features:",
    ],
    features: [
      {
        title: 'Online Examination Platform',
        description:
          'It provides an efficient, secure, and customizable solution for conducting online exams. This includes automated invigilation, anti-cheating, and instant evaluation.',
      },
      {
        title: 'ERP for Schools and Colleges',
        description:
          'AMEX is a complete Enterprise Resource Planning system that integrates administrative tasks such as fee management, attendance tracking, timetable scheduling, and resource allocation.',
      },
      {
        title: 'Analytics and Reporting',
        description:
          'Institutions can access detailed performance analytics and insights, helping in decision-making and streamlining management.',
      },
      {
        title: 'Secure Data Handling',
        description:
          'Incorporating AI and blockchain technology, AMEX ensures the security and privacy of data, making it an ideal choice.',
      },
      {
        title: 'Future-Ready Solution',
        description:
          'The platform is tailored to meet the unique needs of individual schools and colleges, offering flexibility and scalability.',
      },
    ],
    image: {
      src: 'assets/images/amexs.jpg',
      alt: 'Exam Platform',
      afterFeatureIndex: 1,
    },
    closing: [
      'ITP Labs takes immense pride in its journey of over 20 years, serving as a trusted innovator in educational technology.',
    ],
    bullets: [
      'UI and UX designs that are unique, intuitive, and easy to navigate',
      'Applications that are scalable and work out-of-box',
      'Custom application features with full maintenance and support',
    ],
  };
}
