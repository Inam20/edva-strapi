import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../common/courses/courses.service';
import { TermsOfServiceService } from './terms-of-service.service';

@Component({
    selector: 'app-terms-of-service',
    templateUrl: './terms-of-service.component.html',
    styleUrls: ['./terms-of-service.component.scss']
})
export class TermsOfServiceComponent implements OnInit {

    public termsOfServiceData: any;
    public categoriesData: any;
    public data: any;

    constructor(
		private content: CoursesService,
		private privacyPolicyContent: TermsOfServiceService
    ) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
		this.content.getCategoriesData().subscribe((categoriesData: any) => {
            this.categoriesData = categoriesData;
        });
        this.privacyPolicyContent.getData().subscribe((termsOfServiceData: any) => {
            this.termsOfServiceData = termsOfServiceData;
        });
    }

    ngOnInit(): void {}

}