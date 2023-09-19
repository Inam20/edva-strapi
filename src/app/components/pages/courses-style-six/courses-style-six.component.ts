import { Course } from 'src/app/course';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../courseCart.service';
import { CoursesService } from '../../common/courses/courses.service';

@Component({
    selector: 'app-courses-style-six',
    templateUrl: './courses-style-six.component.html',
    styleUrls: ['./courses-style-six.component.scss']
})
export class CoursesStyleSixComponent implements OnInit {

    term = '';
    public data: any;
    public categoriesData: any;
    private readonly notifier: NotifierService;

    constructor(
		private content: CoursesService,
        private cartService: CourseCartService,
        notifierService: NotifierService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
		this.content.getCategoriesData().subscribe((categoriesData: any) => {
            this.categoriesData = categoriesData;
        });
        this.notifier = notifierService;
	}

    addToCart(course: Course) {
        this.cartService.addToCart(course);
        this.notifier.notify('success', 'This course added to the cart!');
    }

    ngOnInit(): void {}

    coursesGrid: number = 1;

    classSearchApplied = false;
    togglSearcheClass() {
        this.classSearchApplied = !this.classSearchApplied;
    }

}