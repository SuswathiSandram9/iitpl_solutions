import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  colors: string[] = ['#ffbe00', '#ff5733', '#33ff57', '#3357ff', '#ff33aa'];
  currentColorIndex = 0;
  currentColor = this.colors[0];

  ngOnInit() {
    setInterval(() => {
      this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
      this.currentColor = this.colors[this.currentColorIndex];
    }, 500); // Change every 10 seconds
  }

  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document.querySelector('.hero-section')!.setAttribute(
        'style', `padding-top: ${header.offsetHeight}px`
      );
    }
  }
}
