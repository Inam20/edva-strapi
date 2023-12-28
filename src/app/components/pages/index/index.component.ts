import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineTrainingBannerService } from '../online-training-school/online-training-banner/online-training-banner.service';
import { FeaturesStyleOneService } from '../../common/features-style-one/features-style-one.service';
import { CoursesService } from '../../common/courses/courses.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonialsStyleTwoService } from '../../common/testimonials-style-two/testimonials-style-two.service';
import { UserService } from '../../../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  private API_URL = environment.API_URL;
  showScrollTopButton: boolean = false;
  showRegisterButton: boolean = false;
  isLoggedIn = this.userService.isLoggedIn();
  userData = this.userService.getUser();
  userOrders: any;
  public userCertificate = 0;
  public userCourses = 1;
  public online: any;
  public education: any;
  public course: any;
  public feedback: any;

  constructor(private route: Router, private http: HttpClient,
    private router: ActivatedRoute, private userService: UserService, private feed: TestimonialsStyleTwoService, private content: OnlineTrainingBannerService, private educate: FeaturesStyleOneService, private courses: CoursesService) {
    this.content.getData().subscribe((data: any) => {
      this.online = data;
    });
    this.educate.getData().subscribe((data: any) => {
      this.education = data;
    });
    this.courses.getData().subscribe((data: any) => {
      this.course = data;
    });
    this.feed.getData().subscribe((data: any) => {
      this.feedback = data;
    })
    this.router.params.subscribe(() => {
      let url = `${this.API_URL}/orders?users_permissions_user_in=${this.userData.id}`;
      let ddd = this.http.get(url);
      ddd.subscribe((res) => {
        this.userOrders = res;
      });
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
    this.route.navigate(['/register']);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  testimonialsSlidesTwo: OwlOptions = {
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>"
    ]
  }



}
