import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { KindergartenServicesService } from './kindergarten-services.service';

@Component({
    selector: 'app-kindergarten-services',
    templateUrl: './kindergarten-services.component.html',
    styleUrls: ['./kindergarten-services.component.scss']
})
export class KindergartenServicesComponent implements OnInit {

    public data: any;

    constructor(
        private content: KindergartenServicesService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

	ngOnInit(): void {}

    servicesSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
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
            }
        }
    }

}