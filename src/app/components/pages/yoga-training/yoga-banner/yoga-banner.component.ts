import { Component, OnInit } from '@angular/core';
import { YogaBannerService } from './yoga-banner.service';

@Component({
    selector: 'app-yoga-banner',
    templateUrl: './yoga-banner.component.html',
    styleUrls: ['./yoga-banner.component.scss']
})
export class YogaBannerComponent implements OnInit {

    public data: any;

    constructor(
        private content: YogaBannerService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}