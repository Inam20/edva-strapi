import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    private readonly notifier: NotifierService;
    products = this.cartService.getItems();
    total = this.cartService.getTotal();

    constructor(
        private cartService: CartService,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    /**
     * increament products quantity
     */
     plus(productId: any){
        this.cartService.incQtyNumber(productId)
        this.total = this.cartService.getTotal();
    }

    /**
     * decreament product quantity
     */
    minus(productId: any){
        this.cartService.decQtyNumber(productId)
        this.total = this.cartService.getTotal();
    }

    onDeleteItem(productID: any) {
        this.cartService.deleteFromCart(productID);
        this.notifier.notify('info', 'Your product removed from the cart!');
        this.total = this.cartService.getTotal();
    }

}