import { Component, OnInit } from '@angular/core';
import { VendorAboutService } from '../vendor-certification-etraining/vendor-about/vendor-about.service';

@Component({
    selector: 'app-about-style-two',
    templateUrl: './about-style-two.component.html',
    styleUrls: ['./about-style-two.component.scss']
})
export class AboutStyleTwoComponent implements OnInit {

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