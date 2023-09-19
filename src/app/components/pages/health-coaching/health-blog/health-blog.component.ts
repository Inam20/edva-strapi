import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../common/blog/blog.service';

@Component({
    selector: 'app-health-blog',
    templateUrl: './health-blog.component.html',
    styleUrls: ['./health-blog.component.scss']
})
export class HealthBlogComponent implements OnInit {

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