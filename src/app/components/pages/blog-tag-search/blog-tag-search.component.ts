import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';

@Component({
    selector: 'app-blog-tag-search',
    templateUrl: './blog-tag-search.component.html',
    styleUrls: ['./blog-tag-search.component.scss']
})
export class BlogTagSearchComponent implements OnInit {

    private API_URL = environment.API_URL;
    public slug: any;
    public data: any;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe((param: any) => {
            let url = `${this.API_URL}/blog-tags?slug=${param.slug}`;
            let ddd = this.http.get(url);
            ddd.subscribe((res) => {
                this.data = res;
            });
        });
    }

    ngOnInit(): void {}

    blogGrid: number = 1;

}