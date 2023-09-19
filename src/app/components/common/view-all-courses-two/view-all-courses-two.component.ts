import { Component, OnInit } from '@angular/core';
import { ViewAllCoursesService } from '../view-all-courses/view-all-courses.service';

@Component({
    selector: 'app-view-all-courses-two',
    templateUrl: './view-all-courses-two.component.html',
    styleUrls: ['./view-all-courses-two.component.scss']
})
export class ViewAllCoursesTwoComponent implements OnInit {

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