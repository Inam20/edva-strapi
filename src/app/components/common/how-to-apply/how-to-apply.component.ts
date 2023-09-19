import { Component, OnInit } from '@angular/core';
import { HowToApplyService } from './how-to-apply.service';

@Component({
    selector: 'app-how-to-apply',
    templateUrl: './how-to-apply.component.html',
    styleUrls: ['./how-to-apply.component.scss']
})
export class HowToApplyComponent implements OnInit {

    public data: any;

    constructor(
		private content: HowToApplyService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}