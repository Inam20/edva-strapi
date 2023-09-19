import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CoursesService } from '../../../common/courses/courses.service';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../../courseCart.service';
import { Course } from 'src/app/course';

@Component({
    selector: 'app-distance-popular-courses',
    templateUrl: './distance-popular-courses.component.html',
    styleUrls: ['./distance-popular-courses.component.scss']
})
export class DistancePopularCoursesComponent implements OnInit {

    public data: any;
    private readonly notifier: NotifierService;

    constructor(
		private content: CoursesService,
        private cartService: CourseCartService,
        notifierService: NotifierService
	) {
		this.content.getPopularCourseData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
	}

    addToCart(course: Course) {
        this.cartService.addToCart(course);
        this.notifier.notify('success', 'This course added to the cart!');
    }

    ngOnInit(): void {}
    
    coursesSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    }

}