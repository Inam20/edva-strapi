import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
    selector: 'app-top-categories',
    templateUrl: './top-categories.component.html',
    styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {

    public data: any;

    constructor(
		private content: CategoriesService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
	}

    ngOnInit(): void {}

}