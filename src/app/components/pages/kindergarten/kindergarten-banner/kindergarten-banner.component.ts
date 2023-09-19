import { Component, OnInit } from '@angular/core';
import { KindergartenBannerService } from './kindergarten-banner.service';

@Component({
	selector: 'app-kindergarten-banner',
	templateUrl: './kindergarten-banner.component.html',
	styleUrls: ['./kindergarten-banner.component.scss']
})
export class KindergartenBannerComponent implements OnInit {

	public data: any;

    constructor(
        private content: KindergartenBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

	ngOnInit(): void {}

}