import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../user.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-profile-update',
    templateUrl: './profile-update.component.html',
    styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

    private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;
    isLoggedIn = this.userService.isLoggedIn();
    userData = this.userService.getUser();
    getUser = this.userService.getUser();

    updateForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        twitter: ['', Validators.required],
        facebook: ['', Validators.required],
        linkedin: ['', Validators.required],
        instagram: ['', Validators.required],
        biography: ['', Validators.required]
    });

    get f(){
        return this.updateForm.controls;
    }

    constructor(
        private formBuilder: UntypedFormBuilder,
        private userService: UserService,
        private http: HttpClient,
        notifierService: NotifierService,
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    onSubmit(): void {
        let checkData = this.updateForm.value;
        const { email, username, password, phoneNumber, biography, facebook, linkedin, twitter, instagram } = checkData;
        let me = `${this.API_URL}/users/${this.userData.id}`;
        this.http
        .put<any>(me, {
            username, email, password, phoneNumber, biography, facebook, linkedin, twitter, instagram,
            token: this.isLoggedIn,
            headers: { 'Authorization': `Bearer ${this.isLoggedIn}` }
        })
        .subscribe((response) => {
            this.notifier.notify('success', 'Updated Successfully!');
            this.updateForm.reset(response);
        });
    }

}