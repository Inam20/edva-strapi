import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/blog-posts?_sort=id:DESC`;
        return this.http.get(url);
    }
    getCategoriesData(){
        let url = `${this.API_URL}/blog-categories?_sort=id:DESC`;
        return this.http.get(url);
    }
    getTagsData(){
        let url = `${this.API_URL}/blog-tags?_sort=id:DESC`;
        return this.http.get(url);
    }
    getBlogData(){
        let url = `${this.API_URL}/blog`;
        return this.http.get(url);
    }

}