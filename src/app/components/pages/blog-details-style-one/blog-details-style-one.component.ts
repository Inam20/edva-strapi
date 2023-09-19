import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { BlogService } from '../../common/blog/blog.service';

@Component({
    selector: 'app-blog-details-style-one',
    templateUrl: './blog-details-style-one.component.html',
    styleUrls: ['./blog-details-style-one.component.scss']
})
export class BlogDetailsStyleOneComponent implements OnInit {

    private API_URL= environment.API_URL;
    public slug: any;
    public data : any;
    term = '';
    public blogPostdata: any;
    public blogCategoriesdata: any;
    public blogTagsdata: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
		private content: BlogService
    ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/blog-posts?slug=${param.slug}`;
            let ddd = this.http.get(url)
            ddd.subscribe(res => {
                this.data = res
            })
        });
		this.content.getData().subscribe((blogPostdata: any) => {
            this.blogPostdata = blogPostdata;
        });
		this.content.getCategoriesData().subscribe((blogCategoriesdata: any) => {
            this.blogCategoriesdata = blogCategoriesdata;
        });
		this.content.getTagsData().subscribe((blogTagsdata: any) => {
            this.blogTagsdata = blogTagsdata;
        });
    }

    ngOnInit(): void {}

    classSearchApplied = false;
    togglSearcheClass() {
        this.classSearchApplied = !this.classSearchApplied;
    }

}