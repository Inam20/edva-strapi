import { Injectable } from '@angular/core';
import { Course } from './course';
@Injectable({
    providedIn: 'root',
})
export class CourseCartService {
    items: Course[] = [];

    constructor() {}

    /**
     * 
     * @param course 
     * @param quantity 
     * Add to cart item
     */
    addToCart(course: Course, quantity: number = 1) {
        const check_index = this.items.findIndex(
            (item) => item.id === course.id
        );
        if (check_index !== -1) {
            this.items[check_index].quantity;
        } else {
            this.items.push({ ...course, quantity });
        }
    }

    /**
     * 
     * @returns get total
     */
    getTotal() {
        const total = this.items.reduce((acc, el) => {
            acc += el.price * el.quantity;
            return acc;
        }, 0);
        return ((total * 100) / 100).toFixed(2);
    }

    /**
     * 
     * @returns get cart items
     */
    getItems() {
        return this.items;
    }

    /**
     * 
     * @param courseID 
     * delete item from cart
     */
    deleteFromCart(courseID: any) {
        const items = this.items.filter((item) => item.id === courseID);
        const index = this.items.indexOf(items[0]);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    /**
     * 
     * @returns clear all cart items
     */
    clearCart() {
        this.items = [];
        return this.items;
    }
}