import { Component, OnInit } from '@angular/core';
import { ElearningAboutService } from './elearning-about.service';

@Component({
    selector: 'app-elearning-about',
    templateUrl: './elearning-about.component.html',
    styleUrls: ['./elearning-about.component.scss']
})
export class ElearningAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: ElearningAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}