import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxScrollTopComponent } from 'ngx-scrolltop';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
    selector: '[appHideScrollTop]'
})
export class HideScrollTopDirective implements OnInit {
    private ngUnsubscribe = new Subject();

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.pipe(takeUntil(this.ngUnsubscribe)).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkVisibility();
            }
        });
    }

    private checkVisibility() {
        // Add logic to check if the current route is the index page
        const isIndexPage = window.location.pathname === '/index'; // Adjust the route based on your configuration

        // Set the visibility of the ngx-scrolltop button
        const displayValue = isIndexPage ? 'none' : 'block';
        this.renderer.setStyle(this.el.nativeElement, 'display', displayValue);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
