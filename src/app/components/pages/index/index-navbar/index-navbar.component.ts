import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { CourseCartService } from 'src/app/courseCart.service';
import { NavbarService } from 'src/app/components/common/navbar/navbar.service';
import { CoursesService } from 'src/app/components/common/courses/courses.service';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.scss']
})
export class IndexNavbarComponent implements OnInit {
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

}
