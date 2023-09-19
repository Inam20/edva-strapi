import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-teacher-register',
    templateUrl: './teacher-register.component.html',
    styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent implements OnInit {

    private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;

    contactForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        message: ['', [Validators.required]]
    });

    constructor(
        private formBuilder: UntypedFormBuilder,
        private http: HttpClient,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    onSubmit(): void {
        let checkData = this.contactForm.value;
        const { name, email, phoneNumber, message } = checkData;
        let url = `${this.API_URL}/teacher-requests`;
        this.http
        .post<any>(url, {
            name, email, phoneNumber, message
        })
        .subscribe((response) => {
            this.notifier.notify('success', 'Check your Email after a while!');
            this.contactForm.reset();
        },
        (e) => {
			this.notifier.notify('error', e.error.data.errors.email[0]);
		});
    }

}