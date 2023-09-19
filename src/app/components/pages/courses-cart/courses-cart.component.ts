import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../courseCart.service';

@Component({
    selector: 'app-courses-cart',
    templateUrl: './courses-cart.component.html',
    styleUrls: ['./courses-cart.component.scss']
})
export class CoursesCartComponent implements OnInit {

    private readonly notifier: NotifierService;
    courses = this.courseCartService.getItems();
    total = this.courseCartService.getTotal();

    constructor(
        private courseCartService: CourseCartService,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    onDeleteItem(courseID: any) {
        this.courseCartService.deleteFromCart(courseID);
        this.notifier.notify('info', 'Your course removed from the cart!');
        this.total = this.courseCartService.getTotal();
    }

}