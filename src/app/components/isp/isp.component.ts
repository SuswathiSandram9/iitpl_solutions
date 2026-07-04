import { Component } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-isp',
  standalone: false,
  templateUrl: './isp.component.html',
  styleUrl: './isp.component.css',
})
export class IspComponent {
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
