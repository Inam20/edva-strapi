import { Component, OnInit } from '@angular/core';
import { LifestyleService } from './lifestyle.service';

@Component({
    selector: 'app-lifestyle',
    templateUrl: './lifestyle.component.html',
    styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {

    public data: any;

    constructor(
		private content: LifestyleService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}