import { Component, OnInit } from '@angular/core';
import { DistanceAboutService } from '../distance-learning/distance-about/distance-about.service';

@Component({
    selector: 'app-about-style-four',
    templateUrl: './about-style-four.component.html',
    styleUrls: ['./about-style-four.component.scss']
})
export class AboutStyleFourComponent implements OnInit {

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