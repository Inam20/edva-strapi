import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public data: any;

    constructor(private router: Router,
        private content: FooterService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void { }

    showDefaultFooter(): boolean {
        return !this.router.url.includes('index')
    }

}