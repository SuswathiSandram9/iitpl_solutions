import { Component } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-video-display',
  standalone: false,
  templateUrl: './video-display.component.html',
  styleUrl: './video-display.component.css'
})
export class VideoDisplayComponent {
  isVisible = false;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.showVideo$.subscribe(show => {
      this.isVisible = show;
    });
  }

  close() {
    this.videoService.close();
  }

  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document.querySelector('.overlay')!.setAttribute(
        'style', `padding-top: ${header.offsetHeight}px`
      );
    }
  }
}
