import { Component, OnInit } from '@angular/core';
import { OnlineTrainingBannerService } from './online-training-banner.service';

@Component({
    selector: 'app-online-training-banner',
    templateUrl: './online-training-banner.component.html',
    styleUrls: ['./online-training-banner.component.scss']
})
export class OnlineTrainingBannerComponent implements OnInit {

    public data: any;

    constructor(
        private content: OnlineTrainingBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}