import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-my-course',
    templateUrl: './my-course.component.html',
    styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {

    isLoggedIn = this.userService.isLoggedIn();
    private API_URL = environment.API_URL;
    userData = this.userService.getUser();
    public slug: any;
    public data: any;
    userOrders: any;

	constructor(
        private userService: UserService,
        private http: HttpClient,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(() => {
            let url = `${this.API_URL}/orders?users_permissions_user_in=${this.userData.id}`;
            let ddd = this.http.get(url);
            ddd.subscribe((res) => {
                this.userOrders = res;
            });
        });
		this.route.params.subscribe((param: any) => {
            let courseUrl = `${this.API_URL}/courses?slug=${param.slug}`;
            let bbb = this.http.get(courseUrl);
            bbb.subscribe((res) => {
                this.data = res;
            });
        });
    }

    ngOnInit(): void {}

}