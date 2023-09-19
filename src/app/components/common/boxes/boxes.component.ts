import { Component, OnInit } from '@angular/core';
import { ModernSchoolingBannerService } from '../../pages/modern-schooling/modern-schooling-banner/modern-schooling-banner.service';

@Component({
    selector: 'app-boxes',
    templateUrl: './boxes.component.html',
    styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

    public data: any;

    constructor(
        private content: ModernSchoolingBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}