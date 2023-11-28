import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { CartService } from '../../../cart.service';
import { CourseCartService } from '../../../courseCart.service';
import { NavbarService } from './navbar.service';
import { CoursesService } from '../courses/courses.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    term = '';
    public data: any;
    public searchData: any;
    isLoggedIn = this.userService.isLoggedIn();
    private readonly notifier: NotifierService;
    cartProducts = this.cartService.getItems();
    cartCourses = this.courseCartService.getItems();

    constructor(
        private courseCartService: CourseCartService,
        private userService: UserService,
        private cartService: CartService,
        notifierService: NotifierService,
        private content: CoursesService,
        private navbar: NavbarService,
        public router: Router
    ) {
        this.notifier = notifierService;
        this.navbar.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.content.getData().subscribe((searchData: any) => {
            this.searchData = searchData;
        });
    }

    ngOnInit(): void { }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classSearchApplied = false;
    togglSearcheClass() {
        this.classSearchApplied = !this.classSearchApplied;
    }

    logOutUser() {
        this.userService.logOut()
        this.notifier.notify('success', 'Logout successful.');
        this.router.navigate(['/'])
            .then(() => {
                window.location.reload()
            })
    }

    showDefaultNavbar(): boolean {
        return !this.router.url.includes('index')
    }

}