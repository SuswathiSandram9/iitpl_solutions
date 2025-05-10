import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  ngAfterViewInit() {
    const header = document.getElementById('sticky-header');
    if (header) {
      document.querySelector('.coming-soon')!.setAttribute(
        'style', `padding-top: ${header.offsetHeight}px`
      );
    }
  }
  
}
