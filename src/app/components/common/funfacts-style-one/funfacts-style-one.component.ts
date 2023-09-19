import { Component, OnInit } from '@angular/core';
import { FunfactsService } from './funfacts.service';

@Component({
    selector: 'app-funfacts-style-one',
    templateUrl: './funfacts-style-one.component.html',
    styleUrls: ['./funfacts-style-one.component.scss']
})
export class FunfactsStyleOneComponent implements OnInit {

    public data: any;

    constructor(
        private content: FunfactsService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}