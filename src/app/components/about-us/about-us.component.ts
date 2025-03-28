import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document.querySelector('.about-us-container')!.setAttribute(
        'style', `padding-top: ${header.offsetHeight}px`
      );
    }
  }
}