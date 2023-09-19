import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../common/courses/courses.service';

@Component({
    selector: 'app-courses-style-five',
    templateUrl: './courses-style-five.component.html',
    styleUrls: ['./courses-style-five.component.scss']
})
export class CoursesStyleFiveComponent implements OnInit {

    public data: any;

    constructor(
		private content: CoursesService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
	}

    ngOnInit(): void {}

    coursesGrid: number = 1;

}