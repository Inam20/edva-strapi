import { Component, OnInit } from '@angular/core';
import { DistanceBannerService } from '../distance-banner/distance-banner.service';

@Component({
    selector: 'app-distance-boxes',
    templateUrl: './distance-boxes.component.html',
    styleUrls: ['./distance-boxes.component.scss']
})
export class DistanceBoxesComponent implements OnInit {

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