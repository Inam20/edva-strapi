import { Component, OnInit } from '@angular/core';
import { OnlinePlatformService } from './online-platform.service';

@Component({
    selector: 'app-online-platform',
    templateUrl: './online-platform.component.html',
    styleUrls: ['./online-platform.component.scss']
})
export class OnlinePlatformComponent implements OnInit {

    public data: any;

    constructor(
		private content: OnlinePlatformService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}