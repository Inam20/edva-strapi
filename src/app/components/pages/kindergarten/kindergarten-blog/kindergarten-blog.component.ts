import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../common/blog/blog.service';

@Component({
    selector: 'app-kindergarten-blog',
    templateUrl: './kindergarten-blog.component.html',
    styleUrls: ['./kindergarten-blog.component.scss']
})
export class KindergartenBlogComponent implements OnInit {

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

    ngOnInit(): void {}

}