import { Component, OnInit } from '@angular/core';
import { SloganService } from './slogan.service';

@Component({
    selector: 'app-slogan',
    templateUrl: './slogan.component.html',
    styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {

    public data: any;

    constructor(
		private content: SloganService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}