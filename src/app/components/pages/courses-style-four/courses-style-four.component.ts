import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../common/courses/courses.service';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../courseCart.service';
import { Course } from 'src/app/course';

@Component({
    selector: 'app-courses-style-four',
    templateUrl: './courses-style-four.component.html',
    styleUrls: ['./courses-style-four.component.scss']
})
export class CoursesStyleFourComponent implements OnInit {

    private readonly notifier: NotifierService;
    public data: any;

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

    coursesGrid: number = 1;

}