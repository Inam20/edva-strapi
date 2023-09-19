import { Component, OnInit } from '@angular/core';
import { HealthCoachingBannerService } from './health-coaching-banner.service';

@Component({
    selector: 'app-health-coaching-banner',
    templateUrl: './health-coaching-banner.component.html',
    styleUrls: ['./health-coaching-banner.component.scss']
})
export class HealthCoachingBannerComponent implements OnInit {

    public data: any;

    constructor(
        private content: HealthCoachingBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}