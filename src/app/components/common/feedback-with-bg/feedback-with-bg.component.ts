import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FeedbackWithBgService } from './feedback-with-bg.service';

@Component({
    selector: 'app-feedback-with-bg',
    templateUrl: './feedback-with-bg.component.html',
    styleUrls: ['./feedback-with-bg.component.scss']
})
export class FeedbackWithBgComponent implements OnInit {

    public data: any;

    constructor(
		private content: FeedbackWithBgService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}