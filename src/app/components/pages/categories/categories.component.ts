import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../common/top-categories/categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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