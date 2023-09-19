import { Component, OnInit } from '@angular/core';
import { ElearningAboutService } from '../elearning-school/elearning-about/elearning-about.service';

@Component({
    selector: 'app-about-style-one',
    templateUrl: './about-style-one.component.html',
    styleUrls: ['./about-style-one.component.scss']
})
export class AboutStyleOneComponent implements OnInit {

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