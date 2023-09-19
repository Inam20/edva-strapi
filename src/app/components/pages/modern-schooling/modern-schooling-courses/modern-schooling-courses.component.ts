import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../common/courses/courses.service';

@Component({
    selector: 'app-modern-schooling-courses',
    templateUrl: './modern-schooling-courses.component.html',
    styleUrls: ['./modern-schooling-courses.component.scss']
})
export class ModernSchoolingCoursesComponent implements OnInit {

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