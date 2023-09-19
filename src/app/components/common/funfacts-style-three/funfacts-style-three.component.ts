import { Component, OnInit } from '@angular/core';
import { FunfactsService } from '../funfacts-style-one/funfacts.service';

@Component({
    selector: 'app-funfacts-style-three',
    templateUrl: './funfacts-style-three.component.html',
    styleUrls: ['./funfacts-style-three.component.scss']
})
export class FunfactsStyleThreeComponent implements OnInit {

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