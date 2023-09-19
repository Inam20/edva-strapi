import { Component, OnInit } from '@angular/core';
import { PremiumAccessService } from '../premium-access/premium-access.service';

@Component({
    selector: 'app-premium-access-two',
    templateUrl: './premium-access-two.component.html',
    styleUrls: ['./premium-access-two.component.scss']
})
export class PremiumAccessTwoComponent implements OnInit {

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