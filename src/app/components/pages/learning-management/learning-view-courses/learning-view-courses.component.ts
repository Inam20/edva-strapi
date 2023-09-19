import { Component, OnInit } from '@angular/core';
import { LearningViewCoursesService } from './learning-view-courses.service';

@Component({
    selector: 'app-learning-view-courses',
    templateUrl: './learning-view-courses.component.html',
    styleUrls: ['./learning-view-courses.component.scss']
})
export class LearningViewCoursesComponent implements OnInit {

    public data: any;

    constructor(
		private content: LearningViewCoursesService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}