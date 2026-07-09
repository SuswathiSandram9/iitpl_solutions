import { Component } from '@angular/core';

interface RevolvingImage {
  src: string;
  alt: string;
  angle: number;
  radius: number;
  size: number;
}

@Component({
  selector: 'app-revolving-gallery',
  standalone: false,
  templateUrl: './revolving-gallery.component.html',
  styleUrl: './revolving-gallery.component.css'
})
export class RevolvingGalleryComponent {
  private readonly sizes = [96, 112, 128, 144, 160, 176];
  private readonly radii = [480, 520, 560, 600, 640, 680];

  private readonly institutionLogos: { file: string; alt: string }[] = [
    { file: 'Annama Chariya University.svg', alt: 'Annama Chariya University' },
    { file: 'apollo.png', alt: 'Apollo University' },
    { file: 'Chennai Institute of Tech.svg', alt: 'Chennai Institute of Technology' },
    { file: 'GURUNANAK College.png', alt: 'Guru Nanak College' },
    { file: 'IIT - Tirupati.svg', alt: 'IIT Tirupati' },
    { file: 'IMG-20260708-WA0008.jpg', alt: 'Partner institution' },
    { file: 'IMG-20260708-WA0009.jpg', alt: 'Partner institution' },
    { file: 'Kongu Engineering College.webp', alt: 'Kongu Engineering College' },
    { file: 'KPR Institute of Tech.png', alt: 'KPR Institute of Technology' },
    { file: 'KUmARAGURU COLLEGE OF TECH.png', alt: 'Kumaraguru College of Technology' },
    { file: 'Loyola College.png', alt: 'Loyola College' },
    { file: 'NIFTEM thanjavur.png', alt: 'NIFTEM Thanjavur' },
    { file: 'nitt.png', alt: 'NITT' },
    { file: 'Panimalar Engineering College.png', alt: 'Panimalar Engineering College' },
    { file: 'PsG ITech_.webp', alt: 'PSG iTech' },
    { file: 'RMK_Engineering_College_logo.gif', alt: 'RMK Engineering College' },
    { file: 'srikrishna-logo.png', alt: 'Sri Krishna College' },
    { file: 'st-joseph-university-logo.png', alt: "St. Joseph's University" },
    { file: "ST. Joseph's Engineering College.png", alt: "St. Joseph's Engineering College" },
    { file: 'TAMILNADU ALRICULTURAL.jpg', alt: 'Tamil Nadu Agricultural University' },
  ];

  images: RevolvingImage[] = this.institutionLogos.map((logo, index) => ({
    src: `assets/images/revolving/${encodeURIComponent(logo.file)}`,
    alt: logo.alt,
    angle: index * (360 / this.institutionLogos.length),
    radius: this.radii[index % this.radii.length],
    size: this.sizes[index % this.sizes.length],
  }));
}
