import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video/video.service';

@Component({
    selector: 'app-video-style-two',
    templateUrl: './video-style-two.component.html',
    styleUrls: ['./video-style-two.component.scss']
})
export class VideoStyleTwoComponent implements OnInit {

    public data: any;

    constructor(
		private content: VideoService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}