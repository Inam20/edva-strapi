import { Component, OnInit } from '@angular/core';
import { DistanceAboutService } from './distance-about.service';

@Component({
    selector: 'app-distance-about',
    templateUrl: './distance-about.component.html',
    styleUrls: ['./distance-about.component.scss']
})
export class DistanceAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: DistanceAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}