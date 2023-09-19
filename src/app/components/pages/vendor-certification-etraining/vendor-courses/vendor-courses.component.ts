import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/courses/courses.service';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../../courseCart.service';
import { Course } from 'src/app/course';

@Component({
    selector: 'app-vendor-courses',
    templateUrl: './vendor-courses.component.html',
    styleUrls: ['./vendor-courses.component.scss']
})
export class VendorCoursesComponent implements OnInit {

    public data: any;
    private readonly notifier: NotifierService;

    constructor(
		private content: CoursesService,
        private cartService: CourseCartService,
        notifierService: NotifierService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
	}

    addToCart(course: Course) {
        this.cartService.addToCart(course);
        this.notifier.notify('success', 'This course added to the cart!');
    }

    ngOnInit(): void {}

}