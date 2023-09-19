import { Component, OnInit } from '@angular/core';
import { FeaturesStyleTwoService } from './features-style-two.service';

@Component({
    selector: 'app-features-style-two',
    templateUrl: './features-style-two.component.html',
    styleUrls: ['./features-style-two.component.scss']
})
export class FeaturesStyleTwoComponent implements OnInit {

    public data: any;

    constructor(
		private content: FeaturesStyleTwoService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}