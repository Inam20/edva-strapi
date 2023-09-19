import { Component, OnInit } from '@angular/core';
import { FeaturesStyleOneService } from './features-style-one.service';

@Component({
    selector: 'app-features-style-one',
    templateUrl: './features-style-one.component.html',
    styleUrls: ['./features-style-one.component.scss']
})
export class FeaturesStyleOneComponent implements OnInit {

    public data: any;

    constructor(
		private content: FeaturesStyleOneService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}