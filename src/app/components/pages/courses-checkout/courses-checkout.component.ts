import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { CourseCartService } from '../../../courseCart.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-courses-checkout',
    templateUrl: './courses-checkout.component.html',
    styleUrls: ['./courses-checkout.component.scss']
})
export class CoursesCheckoutComponent implements OnInit {

    private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;
    isLoggedIn = this.userService.isLoggedIn();
    courses = this.coursesCartService.getItems();
    total = this.coursesCartService.getTotal();
    userData = this.userService.getUser();
    paymentHandler:any = null;

    constructor(
        private coursesCartService: CourseCartService,
        private userService: UserService,
        private http: HttpClient,
        notifierService: NotifierService,
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {
        this.invokeStripe();
    }

    invokeStripe() {
        if(!window.document.getElementById('stripe-script')) {
            let script = window.document.createElement("script");
            script.id = "stripe-script";
            script.type = "text/javascript";
            script.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(script);
        }
    }

    makePayment(amount:any) {
        const paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51JtsDaA8lT3sit5OcPx0XUcQiUUDEeHdj6qp2CZMH4eaEkC9zpiTyAIFgxIpsVoZnOKTkLiaN1zEDyX6s3uztqg600ZxBxv3E2',
            locale: 'auto',
            token: (token: any) => {
                console.log(token);
                alert('Stripe token generated!');

                let checkData = this.courses;
                let checkCourses = this.courses;
                const cartCourses = {
                    customer: checkData,
                    courses: checkCourses,
                    total: this.total,
                    user: this.userData
                };
                let url = `${this.API_URL}/orders`;
                let me = `${this.API_URL}/users/${this.userData.id}`;

                this.http
                .post<any>(url, { courses: cartCourses })
                .subscribe((response) => {
                    this.notifier.notify('success', 'Checkout Successful!');
                });

                this.http
                .get<any>(me, { 
                    headers: { 'Authorization': `Bearer ${this.isLoggedIn}` }
                })
                .subscribe((response) => {
                    localStorage.setItem('edva_users', JSON.stringify(response));
                });
                this.courses = this.coursesCartService.clearCart();
            }
        });
        paymentHandler.open({
            name: 'Edva',
            amount: amount * 100
        });
    }

}