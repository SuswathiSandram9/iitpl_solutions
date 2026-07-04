import { Component } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-iitpl',
  standalone: false,
  templateUrl: './iitpl.component.html',
  styleUrl: './iitpl.component.css',
})
export class IitplComponent {
  constructor(private videoService: VideoService) {}

  play() {
    this.videoService.open();
  }
  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document
        .querySelector('.solutions-container')!
        .setAttribute('style', `padding-top: ${header.offsetHeight}px`);
    }
  }
}
