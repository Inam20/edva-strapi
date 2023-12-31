import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { KindergartenFeedbackService } from './kindergarten-feedback.service';

@Component({
    selector: 'app-kindergarten-feedback',
    templateUrl: './kindergarten-feedback.component.html',
    styleUrls: ['./kindergarten-feedback.component.scss']
})
export class KindergartenFeedbackComponent implements OnInit {

    public data: any;

    constructor(
        private content: KindergartenFeedbackService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}
    
    feedbackSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 0,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1550: {
                items: 5
            }
        }
    }

}