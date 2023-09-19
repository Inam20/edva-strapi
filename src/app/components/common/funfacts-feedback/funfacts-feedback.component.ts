import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FunfactsFeedbackService } from './funfacts-feedback.service';

@Component({
  selector: 'app-funfacts-feedback',
  templateUrl: './funfacts-feedback.component.html',
  styleUrls: ['./funfacts-feedback.component.scss']
})
export class FunfactsFeedbackComponent implements OnInit {

    public data: any;

    constructor(
		private content: FunfactsFeedbackService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

    bgImage = [
        {
            img: 'assets/img/white-bg.jpg'
        }
    ]

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