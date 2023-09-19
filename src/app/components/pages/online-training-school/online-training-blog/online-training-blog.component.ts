import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../common/blog/blog.service';

@Component({
    selector: 'app-online-training-blog',
    templateUrl: './online-training-blog.component.html',
    styleUrls: ['./online-training-blog.component.scss']
})
export class OnlineTrainingBlogComponent implements OnInit {

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