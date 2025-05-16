import { Component } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-expertise',
  standalone: false,
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  constructor(private videoService: VideoService) {}
  
    play() {
      this.videoService.open();
    }
}
