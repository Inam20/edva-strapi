import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/courses/courses.service';

@Component({
    selector: 'app-gym-courses',
    templateUrl: './gym-courses.component.html',
    styleUrls: ['./gym-courses.component.scss']
})
export class GymCoursesComponent implements OnInit {

    public data: any;

    constructor(
		private content: CoursesService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
	}

    ngOnInit(): void {}

}