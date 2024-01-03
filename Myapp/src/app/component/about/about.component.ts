import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  animate: boolean = false;
  animationStarted: boolean[] = [];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const aboutMeElement = document.querySelector('.aboutME');
    const elements = document.querySelectorAll('.tech-stack');

    if (aboutMeElement) {
      const elementPosition = aboutMeElement.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;

      // Checking if the aboutMeElement is in the viewport
      if (elementPosition <= window.innerHeight - 50) {
        this.animate = true;
      } else {
        this.animate = false;
      }
    }

    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;

      // Checking if the element is in the viewport and animation not started
      if (elementPosition <= window.innerHeight - 50 && !this.animationStarted[index]) {
        setTimeout(() => {
          element.classList.add('animate-item');
          this.animationStarted[index] = true;
        }, 200 * index); // Each item animates with a delay
      }
    });
  }

  aboutMeList = [
    {
      name: 'Java Developer',
      picture: "../../../assets/backend.png"
    },
    {
      name: 'AWS Certified',
      picture: "../../../assets/cloud.png"
    },
    {
      name: 'Backend - Spring Boot',
      picture: "../../../assets/gear.png"
    },
    {
      name: 'Frontend - Angular',
      picture: "../../../assets/dev-ops.png"
    }
  ];

}
