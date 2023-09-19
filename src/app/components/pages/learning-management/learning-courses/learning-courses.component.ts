import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/courses/courses.service';

@Component({
    selector: 'app-learning-courses',
    templateUrl: './learning-courses.component.html',
    styleUrls: ['./learning-courses.component.scss']
})
export class LearningCoursesComponent implements OnInit {

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