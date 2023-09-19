import { Component, OnInit } from '@angular/core';
import { OnlineTrainingAboutService } from '../online-training-school/online-training-about/online-training-about.service';

@Component({
  selector: 'app-about-style-three',
  templateUrl: './about-style-three.component.html',
  styleUrls: ['./about-style-three.component.scss']
})
export class AboutStyleThreeComponent implements OnInit {

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