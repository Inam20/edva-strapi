import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { CoursesService } from '../../common/courses/courses.service';
import { NotifierService } from 'angular-notifier';
import { CourseCartService } from '../../../courseCart.service';
import { Course } from 'src/app/course';

@Component({
    selector: 'app-courses-details',
    templateUrl: './courses-details.component.html',
    styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {

    public slug: any;
    public data: any;
    public courseData: any;
    private API_URL = environment.API_URL;
    private readonly notifier: NotifierService;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private content: CoursesService,
        private cartService: CourseCartService,
        notifierService: NotifierService
    ) {
        this.route.params.subscribe((param: any) => {
            let url = `${this.API_URL}/courses?slug=${param.slug}`;
            let ddd = this.http.get(url)
            ddd.subscribe(res => {
                this.data = res
            })
        });
        this.content.getData().subscribe((courseData: any) => {
            this.courseData = courseData;
        });
        this.notifier = notifierService;
    }

    addToCart(course: Course) {
        this.cartService.addToCart(course);
        this.notifier.notify('success', 'This course added to the cart!');
    }

    ngOnInit(): void { }
}