import { Component, OnInit } from '@angular/core';
import { SelectedAgesService } from './selected-ages.service';

@Component({
    selector: 'app-selected-ages',
    templateUrl: './selected-ages.component.html',
    styleUrls: ['./selected-ages.component.scss']
})
export class SelectedAgesComponent implements OnInit {

    public data: any;

    constructor(
		private content: SelectedAgesService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}