import { Component, OnInit } from '@angular/core';
import { FreeTrialService } from './free-trial.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../user.service';

@Component({
    selector: 'app-free-trial',
    templateUrl: './free-trial.component.html',
    styleUrls: ['./free-trial.component.scss']
})
export class FreeTrialComponent implements OnInit {

    public data: any;
    private API_URL = environment.API_URL;
    private readonly notifier: NotifierService;
    isLoggedIn = this.userService.isLoggedIn();

    logForm = this.formBuilder.group({
        identifier: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    regForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    constructor(
		private content: FreeTrialService,
        private formBuilder: UntypedFormBuilder,
        private userService: UserService,
        private http: HttpClient,
        notifierService: NotifierService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    /**
    * User Registration
    */
     onRegister(): void {
        let userData = this.regForm.value;
        const {username,email,password} = userData;
        let url = `${this.API_URL}/auth/local/register`;
        this.http
		.post<any>(url, {
			username,
			email,
			password
		})
		.subscribe((response) => {
			this.notifier.notify('success', 'Congratulations! Registration successful. Please login using the credential.');
		},
		(e) => {
			this.notifier.notify('error', e.error.data[0].messages[0].message);
		});
    }

}