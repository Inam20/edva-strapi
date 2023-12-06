import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineTrainingBannerService } from '../online-training-school/online-training-banner/online-training-banner.service';
import { FeaturesStyleOneService } from '../../common/features-style-one/features-style-one.service';
import { CoursesService } from '../../common/courses/courses.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  showScrollTopButton: boolean = false;
  showRegisterButton: boolean = false;
  public online: any;
  public education: any;
  public course: any

  constructor(private route: Router, private content: OnlineTrainingBannerService, private educate: FeaturesStyleOneService, private courses: CoursesService) {
    this.content.getData().subscribe((data: any) => {
      this.online = data;
    });
    this.educate.getData().subscribe((data: any) => {
      this.education = data;
    });
    this.courses.getData().subscribe((data: any) => {
      this.course = data;
    });

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
