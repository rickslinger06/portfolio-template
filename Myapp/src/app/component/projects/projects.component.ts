import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  animate: boolean = false;
  animationStarted: boolean[] = [];
  isSmall: boolean = true;


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const aboutMeElement = document.querySelector('.project-section');

    if (aboutMeElement) {
      const elementPosition = aboutMeElement.getBoundingClientRect().top;

      if (elementPosition <= window.innerHeight - 50) {
        this.animate = true;
      } else {
        this.animate = false;
      }
    }


  }
  images = [
    { src: '../../../assets/item86Page.png', small: false, description: "item86.com", link: "https://item86.com", github: "https://item86.com" },
    { src: '../../../assets/googleMap.png', small: true, description: "Trip price Calculation", link: "https://github.com/rickslinger06/google-calculate-route", github: "https://github.com/rickslinger06/google-calculate-route" },
    { src: '../../../assets/rent-backend.png', small: true, description: "rent-a-trip Backend", link: "https://item86.com", github: "https://github.com/rickslinger06/rent-a-trip" },
    { src: '../../../assets/portfolio.png', small: true, description: "Portfolio template", link: "https://item86.com", github: "https://github.com/rickslinger06/portfolio-template" },
  ];

  toggleSize(index: number) {
    for (let i = 0; i < this.images.length; i++) {
      if (i === index) {
        this.images[i].small = false; // Clicked image becomes big
      } else {
        this.images[i].small = true; // Other images become small
      }
    }
  }






}