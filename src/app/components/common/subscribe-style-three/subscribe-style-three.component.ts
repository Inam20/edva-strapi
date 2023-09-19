import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe/subscribe.service';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-subscribe-style-three',
    templateUrl: './subscribe-style-three.component.html',
    styleUrls: ['./subscribe-style-three.component.scss']
})
export class SubscribeStyleThreeComponent implements OnInit {

    private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;
    public data: any;

    subscribeForm = this.formBuilder.group({
        email: ['', [Validators.required]]
    });

    constructor(
        private content: SubscribeService,
        private formBuilder: UntypedFormBuilder,
        private http: HttpClient,
        notifierService: NotifierService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    onSubmit(): void {
        let checkData = this.subscribeForm.value;
        const { email } = checkData;
        let url = `${this.API_URL}/subscribers`;
        this.http
        .post<any>(url, {
            email
        })
        .subscribe((response) => {
            this.notifier.notify('success', 'You have subscribed successfully.');
            this.subscribeForm.reset();
        },
        (e) => {
			this.notifier.notify('error', e.error.data.errors.email[0]);
		});
    }

}