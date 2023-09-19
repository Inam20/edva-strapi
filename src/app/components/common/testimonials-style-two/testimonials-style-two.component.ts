import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonialsStyleTwoService } from './testimonials-style-two.service';

@Component({
    selector: 'app-testimonials-style-two',
    templateUrl: './testimonials-style-two.component.html',
    styleUrls: ['./testimonials-style-two.component.scss']
})
export class TestimonialsStyleTwoComponent implements OnInit {

    public data: any;

    constructor(
		private content: TestimonialsStyleTwoService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}
    
    testimonialsSlidesTwo: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}