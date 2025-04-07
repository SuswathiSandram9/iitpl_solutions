import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: false,
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent {
  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document
        .querySelector('.solutions-container')!
        .setAttribute('style', `padding-top: ${header.offsetHeight}px`);
    }
  }
}
