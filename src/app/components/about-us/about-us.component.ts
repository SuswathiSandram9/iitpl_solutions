import { Component } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  
  constructor(private videoService: VideoService) {}

  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document
        .querySelector('.about-us-container')!
        .setAttribute('style', `padding-top: ${header.offsetHeight}px`);
    }

    // Get the carousel inner container
    const carouselInner = document.querySelector('.carousel-inner');

    // Get the carousel control buttons
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    // Amount of scroll for each click (adjust if needed)
    const scrollAmount = 320;

    // Handle left arrow click
    prevButton!.addEventListener('click', function () {
      carouselInner!.scrollLeft -= scrollAmount; // Scroll left by defined amount
    });

    // Handle right arrow click
    nextButton!.addEventListener('click', function () {
      carouselInner!.scrollLeft += scrollAmount; // Scroll right by defined amount
    });
  }

  play() {
    this.videoService.open();
  }

  openAmexLink(): void {
    window.open('https://amex-iitpl.vercel.app/', '_blank', 'noopener,noreferrer');
  }
}
