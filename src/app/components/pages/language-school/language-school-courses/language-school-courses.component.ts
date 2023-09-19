import { Component, OnInit } from '@angular/core';
import { LanguageSchoolCoursesService } from './language-school-courses.service';

@Component({
    selector: 'app-language-school-courses',
    templateUrl: './language-school-courses.component.html',
    styleUrls: ['./language-school-courses.component.scss']
})
export class LanguageSchoolCoursesComponent implements OnInit {

    public data: any;

    constructor(
        private content: LanguageSchoolCoursesService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}