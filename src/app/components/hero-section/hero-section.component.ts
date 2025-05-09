import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  words = ['process', 'future', 'system'];
  currentWord = this.words[0];
  private wordIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 2000);
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
