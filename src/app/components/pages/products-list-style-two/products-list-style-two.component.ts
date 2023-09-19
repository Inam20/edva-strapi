import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-list-style-one/products.service';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { Product } from 'src/app/product';

@Component({
    selector: 'app-products-list-style-two',
    templateUrl: './products-list-style-two.component.html',
    styleUrls: ['./products-list-style-two.component.scss']
})
export class ProductsListStyleTwoComponent implements OnInit {

    public data: any;
    private readonly notifier: NotifierService;
    term = '';

    constructor(
        private cartService: CartService,
        notifierService: NotifierService,
        private content: ProductsService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    ngOnInit(): void {}

    shopGrid: number = 1;

    classSearchApplied = false;
    togglSearcheClass() {
        this.classSearchApplied = !this.classSearchApplied;
    }

}