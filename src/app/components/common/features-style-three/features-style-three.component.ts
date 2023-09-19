import { Component, OnInit } from '@angular/core';
import { FeaturesStyleThreeService } from './features-style-three.service';

@Component({
    selector: 'app-features-style-three',
    templateUrl: './features-style-three.component.html',
    styleUrls: ['./features-style-three.component.scss']
})
export class FeaturesStyleThreeComponent implements OnInit {

    public data: any;

    constructor(
		private content: FeaturesStyleThreeService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}