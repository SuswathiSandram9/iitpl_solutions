import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document.querySelector('.contact-container')!.setAttribute(
        'style', `padding-top: ${header.offsetHeight}px`
      );
    }
  }
}
