import { Component, OnInit } from '@angular/core';
import { ElearningBannerService } from './elearning-banner.service';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../../courseCart.service';
import { Course } from 'src/app/course';

@Component({
    selector: 'app-elearning-banner',
    templateUrl: './elearning-banner.component.html',
    styleUrls: ['./elearning-banner.component.scss']
})
export class ElearningBannerComponent implements OnInit {

    public data: any;
    public courseData: any;
    private readonly notifier: NotifierService;

    constructor(
		private content: ElearningBannerService,
        private cartService: CourseCartService,
        notifierService: NotifierService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.content.getCourseData().subscribe((courseData: any) => {
            this.courseData = courseData;
        });
        this.notifier = notifierService;
	}

    addToCart(course: Course) {
        this.cartService.addToCart(course);
        this.notifier.notify('success', 'This course added to the cart!');
    }

    ngOnInit(): void {}

    bgImage = [
        {
            img: 'assets/img/gray-bg.jpg'
        }
    ]

}