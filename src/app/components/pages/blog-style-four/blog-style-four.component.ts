import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../common/blog/blog.service';

@Component({
    selector: 'app-blog-style-four',
    templateUrl: './blog-style-four.component.html',
    styleUrls: ['./blog-style-four.component.scss']
})
export class BlogStyleFourComponent implements OnInit {

    term = '';
    public data: any;
    public blogCategoriesdata: any;
    public blogTagsdata: any;
    public blogData: any;

    constructor(
		private content: BlogService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
		this.content.getCategoriesData().subscribe((blogCategoriesdata: any) => {
            this.blogCategoriesdata = blogCategoriesdata;
        });
		this.content.getTagsData().subscribe((blogTagsdata: any) => {
            this.blogTagsdata = blogTagsdata;
        });
		this.content.getBlogData().subscribe((blogData: any) => {
            this.blogData = blogData;
        });
	}

    blogGrid: number = 1;

    ngOnInit(): void {}

    classSearchApplied = false;
    togglSearcheClass() {
        this.classSearchApplied = !this.classSearchApplied;
    }

}