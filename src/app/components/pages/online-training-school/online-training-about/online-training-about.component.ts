import { Component, OnInit } from '@angular/core';
import { OnlineTrainingAboutService } from './online-training-about.service';

@Component({
    selector: 'app-online-training-about',
    templateUrl: './online-training-about.component.html',
    styleUrls: ['./online-training-about.component.scss']
})
export class OnlineTrainingAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: OnlineTrainingAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}