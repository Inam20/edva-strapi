import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FeedbackService } from '../feedback/feedback.service';

@Component({
    selector: 'app-feedback-style-two',
    templateUrl: './feedback-style-two.component.html',
    styleUrls: ['./feedback-style-two.component.scss']
})
export class FeedbackStyleTwoComponent implements OnInit {

    public data: any;

    constructor(
		private content: FeedbackService
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
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    }

}