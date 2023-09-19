import { Component, OnInit } from '@angular/core';
import { FunfactsService } from '../funfacts-style-one/funfacts.service';

@Component({
    selector: 'app-funfacts-style-two',
    templateUrl: './funfacts-style-two.component.html',
    styleUrls: ['./funfacts-style-two.component.scss']
})
export class FunfactsStyleTwoComponent implements OnInit {

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