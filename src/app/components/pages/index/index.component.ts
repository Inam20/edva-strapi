import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  showScrollTopButton: boolean = false;
  showRegisterButton: boolean = false;

  constructor(private route: Router) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Show/hide scroll top button based on scroll position
    this.showScrollTopButton = scrollY > 200;

    // Show/hide register button based on scroll position
    this.showRegisterButton = scrollY > 400; // Adjust the value based on your preference
  }

  navigateToRegister() {
    this.route.navigate(['/profile-authentication/register']);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
