import { Component, OnInit } from '@angular/core';
import { VendorBannerService } from './vendor-banner.service';

@Component({
    selector: 'app-vendor-banner',
    templateUrl: './vendor-banner.component.html',
    styleUrls: ['./vendor-banner.component.scss']
})
export class VendorBannerComponent implements OnInit {

    public data: any;

    constructor(
        private content: VendorBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}