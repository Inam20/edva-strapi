import { Component, OnInit } from '@angular/core';
import { FunfactsService } from '../funfacts-style-one/funfacts.service';

@Component({
    selector: 'app-funfacts-style-four',
    templateUrl: './funfacts-style-four.component.html',
    styleUrls: ['./funfacts-style-four.component.scss']
})
export class FunfactsStyleFourComponent implements OnInit {

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