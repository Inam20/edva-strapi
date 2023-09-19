import { Component, OnInit } from '@angular/core';
import { LanguageSchoolBannerService } from './language-school-banner.service';

@Component({
    selector: 'app-language-school-banner',
    templateUrl: './language-school-banner.component.html',
    styleUrls: ['./language-school-banner.component.scss']
})
export class LanguageSchoolBannerComponent implements OnInit {

    public data: any;

    constructor(
        private content: LanguageSchoolBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}