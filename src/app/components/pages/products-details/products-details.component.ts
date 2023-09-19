import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { Product } from 'src/app/product';
import { environment } from '../../../../../src/environments/environment';
import { ProductsService } from '../products-list-style-one/products.service';

@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

    private readonly notifier: NotifierService;
    private API_URL= environment.API_URL;
    public slug: any;
    public data : any;
    public productData: any;

    constructor(
        private route: ActivatedRoute,
        private http:HttpClient,
        private cartService: CartService,
        notifierService: NotifierService,
        private content: ProductsService
    ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/products?slug=${param.slug}`;
            let ddd = this.http.get(url)
            ddd.subscribe(res => {
                this.data = res
            })
        });
        this.notifier = notifierService;
        this.content.getData().subscribe((productData: any) => {
            this.productData = productData;
        });
    }

    addToCart(product: Product, quantity: number) {
        this.cartService.addToCart(product, quantity);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    ngOnInit(): void {}

    // Input Counter
	inputnumber = 1;
	plus(){
		this.inputnumber = this.inputnumber+1;
	}
	minus(){(this.inputnumber != 1)
		{
			this.inputnumber = this.inputnumber-1;
		}
	}

}