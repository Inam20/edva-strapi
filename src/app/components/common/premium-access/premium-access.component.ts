import { Component, OnInit } from '@angular/core';
import { PremiumAccessService } from './premium-access.service';

@Component({
    selector: 'app-premium-access',
    templateUrl: './premium-access.component.html',
    styleUrls: ['./premium-access.component.scss']
})
export class PremiumAccessComponent implements OnInit {

    public data: any;

    constructor(
		private content: PremiumAccessService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}