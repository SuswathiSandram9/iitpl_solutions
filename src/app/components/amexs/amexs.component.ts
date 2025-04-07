import { Component } from '@angular/core';

@Component({
  selector: 'app-amexs',
  standalone: false,
  templateUrl: './amexs.component.html',
  styleUrl: './amexs.component.css'
})
export class AmexsComponent {
  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document
        .querySelector('.amexs-container')!
        .setAttribute('style', `padding-top: ${header.offsetHeight}px`);
    }
  }
}
