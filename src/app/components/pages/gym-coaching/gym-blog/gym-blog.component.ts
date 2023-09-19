import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../common/blog/blog.service';

@Component({
    selector: 'app-gym-blog',
    templateUrl: './gym-blog.component.html',
    styleUrls: ['./gym-blog.component.scss']
})
export class GymBlogComponent implements OnInit {

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