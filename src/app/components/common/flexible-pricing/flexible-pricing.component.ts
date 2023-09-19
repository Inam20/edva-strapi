import { Component, OnInit } from '@angular/core';
import { FlexiblePricingService } from './flexible-pricing.service';

@Component({
    selector: 'app-flexible-pricing',
    templateUrl: './flexible-pricing.component.html',
    styleUrls: ['./flexible-pricing.component.scss']
})
export class FlexiblePricingComponent implements OnInit {

    public data: any;

    constructor(
		private content: FlexiblePricingService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}