import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/courses/courses.service';

@Component({
    selector: 'app-vendor-popular-courses',
    templateUrl: './vendor-popular-courses.component.html',
    styleUrls: ['./vendor-popular-courses.component.scss']
})
export class VendorPopularCoursesComponent implements OnInit {

    public data: any;

    constructor(
		private content: CoursesService
	) {
		this.content.getPopularCourseData().subscribe((data: any) => {
            this.data = data;
        });
	}

    ngOnInit(): void {}

}