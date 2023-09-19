import { Component, OnInit } from '@angular/core';
import { LearningAboutService } from './learning-about.service';

@Component({
    selector: 'app-learning-about',
    templateUrl: './learning-about.component.html',
    styleUrls: ['./learning-about.component.scss']
})
export class LearningAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: LearningAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}