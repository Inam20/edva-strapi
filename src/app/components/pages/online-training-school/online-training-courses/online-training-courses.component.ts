import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/courses/courses.service';

@Component({
    selector: 'app-online-training-courses',
    templateUrl: './online-training-courses.component.html',
    styleUrls: ['./online-training-courses.component.scss']
})
export class OnlineTrainingCoursesComponent implements OnInit {

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