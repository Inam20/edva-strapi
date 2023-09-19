import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../common/courses/courses.service';
import { PrivacyPolicyService } from './privacy-policy.service';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

    public categoriesData: any;
    public data: any;
    public privacyPolicyData: any;

    constructor(
		private content: CoursesService,
		private privacyPolicyContent: PrivacyPolicyService
    ) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
		this.content.getCategoriesData().subscribe((categoriesData: any) => {
            this.categoriesData = categoriesData;
        });
        this.privacyPolicyContent.getData().subscribe((privacyPolicyData: any) => {
            this.privacyPolicyData = privacyPolicyData;
        });
    }

    ngOnInit(): void {}

}