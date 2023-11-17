import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    private API_URL = environment.API_URL;

    constructor(
        private http: HttpClient
    ) { }

    getData() {
        let url = `${this.API_URL}/courses?_sort=id:DESC`;
        return this.http.get(url);
    }
    getCategoriesData() {
        let url = `${this.API_URL}/courses-categories?_sort=id:DESC`;
        return this.http.get(url);
    }
    getPopularCourseData() {
        let url = `${this.API_URL}/courses?popular=true&_sort=id:DESC`;
        return this.http.get(url);
    }
}