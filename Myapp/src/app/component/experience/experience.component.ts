import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    // Your experience data objects here
    {
      date: 'Oct 2022 - June 2023',
      icon: '../../../assets/fdm.jpeg',
      title: 'Software Developer Consultant',
      company_name: 'FDM Group'
    }, {
      date: 'April 2021 - October 2022',
      icon: '../../../assets/mskims.png',
      title: 'Manager/Bartender',
      company_name: 'Ms.Kims Bar and Lounge'
    }
    , {
      date: 'June 2019 - March 2020',
      icon: '../../../assets/1hotel.jpeg',
      title: 'F & B Attendant',
      company_name: '1 Hotel'
    },
    {
      date: 'Feb 2017 - June 2019',
      icon: '../../../assets/capitalone.png',
      title: 'Branch Ambassador',
      company_name: 'Capital One Bank'
    }


  ];



  animate: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.experiences.length; i++) {
      this.animate[i] = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const timelineElements = document.querySelectorAll('.timeline-details');

    if (timelineElements) {
      timelineElements.forEach((element: any, index: number) => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition <= window.innerHeight - 50) {
          this.animate[index] = true;
        }
      });
    }
  }
}


