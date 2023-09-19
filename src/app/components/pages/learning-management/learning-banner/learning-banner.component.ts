import { Component, OnInit } from '@angular/core';
import { LearningBannerService } from './learning-banner.service';

@Component({
    selector: 'app-learning-banner',
    templateUrl: './learning-banner.component.html',
    styleUrls: ['./learning-banner.component.scss']
})
export class LearningBannerComponent implements OnInit {

    public data: any;

    constructor(
        private content: LearningBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}