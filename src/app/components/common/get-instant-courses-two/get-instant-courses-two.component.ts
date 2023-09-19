import { Component, OnInit } from '@angular/core';
import { GetInstantCoursesService } from '../get-instant-courses/get-instant-courses.service';

@Component({
    selector: 'app-get-instant-courses-two',
    templateUrl: './get-instant-courses-two.component.html',
    styleUrls: ['./get-instant-courses-two.component.scss']
})
export class GetInstantCoursesTwoComponent implements OnInit {

    public data: any;

    constructor(
		private content: GetInstantCoursesService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}