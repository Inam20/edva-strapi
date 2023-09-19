import { Component, OnInit } from '@angular/core';
import { KindergartenAboutService } from './kindergarten-about.service';

@Component({
    selector: 'app-kindergarten-about',
    templateUrl: './kindergarten-about.component.html',
    styleUrls: ['./kindergarten-about.component.scss']
})
export class KindergartenAboutComponent implements OnInit {

    public data: any;

    constructor(
        private content: KindergartenAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

	ngOnInit(): void {}

}