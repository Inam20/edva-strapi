import { Component, OnInit } from '@angular/core';
import { ModernSchoolingBannerService } from './modern-schooling-banner.service';

@Component({
    selector: 'app-modern-schooling-banner',
    templateUrl: './modern-schooling-banner.component.html',
    styleUrls: ['./modern-schooling-banner.component.scss']
})
export class ModernSchoolingBannerComponent implements OnInit {

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