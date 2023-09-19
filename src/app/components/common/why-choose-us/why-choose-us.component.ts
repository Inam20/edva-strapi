import { Component, OnInit } from '@angular/core';
import { WhyChooseUsService } from './why-choose-us.service';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

    public data: any;

    constructor(
		private content: WhyChooseUsService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}