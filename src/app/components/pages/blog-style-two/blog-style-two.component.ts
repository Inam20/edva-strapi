import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../common/blog/blog.service';

@Component({
    selector: 'app-blog-style-two',
    templateUrl: './blog-style-two.component.html',
    styleUrls: ['./blog-style-two.component.scss']
})
export class BlogStyleTwoComponent implements OnInit {

    public data: any;
    public blogData: any;

    constructor(
		private content: BlogService
	) {
		this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
		this.content.getBlogData().subscribe((blogData: any) => {
            this.blogData = blogData;
        });
	}

    blogGrid: number = 1;

    ngOnInit(): void {}

}