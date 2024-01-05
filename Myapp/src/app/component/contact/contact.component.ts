import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';

  animateForm: boolean = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message
    };

    this.http.post<any>('https://formspree.io/f/xqkrkbvj', formData)
      .subscribe(
        response => {

          console.log('Message sent successfully!', response);
          alert('Message sent successfully!');
          this.firstName = "";
          this.lastName = "";
          this.message = "";
          this.email = "";
        },
        error => {

          console.error('Error sending message:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  }






  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      const elementPosition = contactElement.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;

      // Check if the contact form is in the viewport
      if (elementPosition <= window.innerHeight - 50) {
        this.animateForm = true;
      } else {
        this.animateForm = false;
      }
    }
  }
}
