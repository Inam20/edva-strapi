import { Component, OnInit } from '@angular/core';
import { GymCoachingBannerService } from '../../pages/gym-coaching/gym-coaching-banner/gym-coaching-banner.service';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

    public data: any;

    constructor(
        private content: GymCoachingBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}