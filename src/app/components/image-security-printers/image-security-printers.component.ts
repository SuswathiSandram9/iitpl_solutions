import { Component } from '@angular/core';

@Component({
  selector: 'app-image-security-printers',
  standalone: false,
  templateUrl: './image-security-printers.component.html',
  styleUrl: './image-security-printers.component.css'
})
export class ImageSecurityPrintersComponent {
  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document.querySelector('.image-security-container')!.setAttribute(
        'style', `padding-top: ${header.offsetHeight}px`
      );
    }
  }
}
