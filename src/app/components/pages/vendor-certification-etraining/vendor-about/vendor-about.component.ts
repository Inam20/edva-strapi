import { Component, OnInit } from '@angular/core';
import { VendorAboutService } from './vendor-about.service';

@Component({
    selector: 'app-vendor-about',
    templateUrl: './vendor-about.component.html',
    styleUrls: ['./vendor-about.component.scss']
})
export class VendorAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: VendorAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}