import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { UserService } from '../../../user.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

	private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;
    products = this.cartService.getItems();
    total = this.cartService.getTotal();
    isLoggedIn = this.userService.isLoggedIn();
    userData = this.userService.getUser();

	checkoutForm = this.formBuilder.group({
        fullname: ['', Validators.required],
        email: ['', [Validators.required]],
        address: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(3)]],
    });

	constructor(
        private formBuilder: UntypedFormBuilder,
        private cartService: CartService,
        private userService: UserService,
        private http: HttpClient,
        notifierService: NotifierService
	) {
		this.notifier = notifierService;
	}

	ngOnInit(): void {}

	onSubmit(): void {
        let checkData = this.checkoutForm.value;
        let checkProducts = this.products;
        const cartProducts = {
            customer: checkData,
            products: checkProducts,
            total: this.total,
            user: this.userData
        };

        let url = `${this.API_URL}/productsorders`;
        let me = `${this.API_URL}/users/${this.userData.id}`;
        this.http
        .post<any>(url, { products: cartProducts })
        .subscribe((response) => {
            this.notifier.notify('success', 'Your order has been placed!');
        });
        
        this.http
        .get<any>(me, { 
            headers: { 'Authorization': `Bearer ${this.isLoggedIn}` }
            })
        .subscribe((response) => {
            localStorage.setItem('edva_users', JSON.stringify(response));
        });
        
        // Process checkout data here
        this.products = this.cartService.clearCart();
        this.checkoutForm.reset();
    }

}