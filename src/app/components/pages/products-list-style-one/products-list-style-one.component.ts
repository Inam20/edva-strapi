import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { Product } from 'src/app/product';

@Component({
    selector: 'app-products-list-style-one',
    templateUrl: './products-list-style-one.component.html',
    styleUrls: ['./products-list-style-one.component.scss']
})
export class ProductsListStyleOneComponent implements OnInit {

    public data: any;
    private readonly notifier: NotifierService;

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

}