import { Component, OnInit } from '@angular/core';
import { LanguageSchoolAboutService } from './language-school-about.service';

@Component({
    selector: 'app-language-school-about',
    templateUrl: './language-school-about.component.html',
    styleUrls: ['./language-school-about.component.scss']
})
export class LanguageSchoolAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: LanguageSchoolAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}