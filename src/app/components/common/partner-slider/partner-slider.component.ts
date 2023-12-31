import { Component, OnInit } from '@angular/core';
import { PartnerSliderService } from './partner-slider.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner-slider',
    templateUrl: './partner-slider.component.html',
    styleUrls: ['./partner-slider.component.scss']
})
export class PartnerSliderComponent implements OnInit {

    public data: any;

    constructor(
		private content: PartnerSliderService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {
    }
    
    partnerSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }

}