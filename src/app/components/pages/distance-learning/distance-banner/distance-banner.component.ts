import { Component, OnInit } from '@angular/core';
import { DistanceBannerService } from './distance-banner.service';

@Component({
    selector: 'app-distance-banner',
    templateUrl: './distance-banner.component.html',
    styleUrls: ['./distance-banner.component.scss']
})
export class DistanceBannerComponent implements OnInit {

    public data: any;

    constructor(
		private content: DistanceBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}