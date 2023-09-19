import { Component, OnInit } from '@angular/core';
import { YogaAboutService } from './yoga-about.service';

@Component({
    selector: 'app-yoga-about',
    templateUrl: './yoga-about.component.html',
    styleUrls: ['./yoga-about.component.scss']
})
export class YogaAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: YogaAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}