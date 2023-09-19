import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';

@Component({
    selector: 'app-course-category-search',
    templateUrl: './course-category-search.component.html',
    styleUrls: ['./course-category-search.component.scss']
})
export class CourseCategorySearchComponent implements OnInit {

    private API_URL = environment.API_URL;
    public slug: any;
    public data: any;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe((param: any) => {
            let url = `${this.API_URL}/courses-categories?slug=${param.slug}`;
            let ddd = this.http.get(url);
            ddd.subscribe((res) => {
                this.data = res;
            });
        });
    }

    ngOnInit(): void {}

    coursesGrid: number = 1;

}