import { Component, OnInit } from '@angular/core';
import { GetInstantCoursesService } from './get-instant-courses.service';

@Component({
    selector: 'app-get-instant-courses',
    templateUrl: './get-instant-courses.component.html',
    styleUrls: ['./get-instant-courses.component.scss']
})
export class GetInstantCoursesComponent implements OnInit {

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