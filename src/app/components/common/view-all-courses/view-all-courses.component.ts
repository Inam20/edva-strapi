import { Component, OnInit } from '@angular/core';
import { ViewAllCoursesService } from './view-all-courses.service';

@Component({
    selector: 'app-view-all-courses',
    templateUrl: './view-all-courses.component.html',
    styleUrls: ['./view-all-courses.component.scss']
})
export class ViewAllCoursesComponent implements OnInit {

    public data: any;

    constructor(
		private content: ViewAllCoursesService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}