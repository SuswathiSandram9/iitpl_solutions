import { Component } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  constructor(private videoService: VideoService) {}

  play() {
    this.videoService.open();
  }

  words = ['process', 'future', 'system'];
  currentWord = '';
  private wordIndex = 0;
  private charIndex = 0;

  ngOnInit() {
    this.typeWord();
  }

  typeWord() {
    const word = this.words[this.wordIndex];
    if (this.charIndex < word.length) {
      this.currentWord += word[this.charIndex];
      this.charIndex++;
      setTimeout(() => this.typeWord(), 150); // typing speed
    } else {
      setTimeout(() => this.nextWord(), 1500); // pause before next word
    }
  }

  nextWord() {
    this.wordIndex = (this.wordIndex + 1) % this.words.length;
    this.charIndex = 0;
    this.currentWord = '';
    this.typeWord();
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
