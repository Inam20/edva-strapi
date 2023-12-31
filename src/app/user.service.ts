import { Injectable } from '@angular/core';

let users = JSON.parse(localStorage.getItem('edva_users') || '{}');

@Injectable({
    providedIn: 'root',
})
export class UserService {

    isLoggedIn() {
        return users && users.jwt
    }

    getUser(){
        return users && users.user
    }

    logOut(){
        localStorage.removeItem("edva_users");
    }

}